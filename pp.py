message = "Some text to hash".encode()
import time, hashlib

# hash with MD5 (not recommended)
start_time = time.time()
print("MD5:", hashlib.md5(message).hexdigest())
print("--- %s seconds ---" % (time.time() - start_time))

# hash with SHA-2 (SHA-256)
start_time = time.time()
print("SHA-256:", hashlib.sha256(message).hexdigest())
print("--- %s seconds ---" % (time.time() - start_time))

# hash with SHA-2 (SHA-512)
start_time = time.time()
print("SHA-512:", hashlib.sha512(message).hexdigest())
print("--- %s seconds ---" % (time.time() - start_time))

# hash with SHA-3
start_time = time.time()
print("SHA-3-256:", hashlib.sha3_256(message).hexdigest())
print("--- %s seconds ---" % (time.time() - start_time))

# hash with SHA-3
start_time = time.time()
print("SHA-3-512:", hashlib.sha3_512(message).hexdigest())
print("--- %s seconds ---" % (time.time() - start_time))

# 256-bit BLAKE2 (or BLAKE2s)
start_time = time.time()
print("BLAKE2c:", hashlib.blake2s(message).hexdigest())
print("--- %s seconds ---" % (time.time() - start_time))


# 512-bit BLAKE2 (or BLAKE2b)
start_time = time.time()
print("BLAKE2b:", hashlib.blake2b(message).hexdigest())
print("--- %s seconds ---" % (time.time() - start_time))