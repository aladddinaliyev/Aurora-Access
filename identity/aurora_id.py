import secrets

def generate_aurora_key():
    return 'aurora_' + secrets.token_urlsafe(24)
