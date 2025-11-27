# storage/ipfs/pin_file.py
import requests, os
TOKEN = os.getenv("WEB3_STORAGE_TOKEN","")
def upload_file(path):
    url = "https://api.web3.storage/upload"
    headers = {"Authorization": f"Bearer {TOKEN}"}
    with open(path,"rb") as fh:
        r = requests.post(url, headers=headers, files={"file": fh})
    r.raise_for_status()
    return r.json()
