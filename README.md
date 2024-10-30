# https-ex

Download OpenSSL: https://slproweb.com/products/Win32OpenSSL.html

Generate a self-signed SSL certificate, use the OpenSSL command-line tool:
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj "/CN=localhost" -keyout server key -out server.crt