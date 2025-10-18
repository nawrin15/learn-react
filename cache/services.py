
class CacheService():
    async def set_single_value(self, key: str, value: str, expiry_time_in_sec: int = 0) -> None:
        if expiry_time_in_sec > 0:
            await self._redis.setex(key, expiry_time_in_sec, value=value)
        else:
            await self._redis.set(key, value)

    async def get_single_value(self, key: str) -> str:
        result = await self._redis.get(key)
        return result

    async def del_single_value(self, key: str) -> int:
        await self._redis.delete(key)

    async def get_all_key_by_match_pattern_count(self, match_pattern: str) -> int:
        count = 0
        async for key in self._redis.scan_iter(match_pattern):
            count += 1
        return count

    async def clear_all_cache(self) -> None:
       self._redis.flush_all()