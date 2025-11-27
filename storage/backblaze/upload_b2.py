# storage/backblaze/upload_b2.py
# For prototype return simulated URL or use boto3 with S3 endpoint if configured.
def upload(local_path, key):
    return f"https://b2.example.com/{key}"
