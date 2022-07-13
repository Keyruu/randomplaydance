import zipfile
import requests
from sys import exit
import os


BASE_URL = "https://kpop.daisuki.com.br/download.php?file="
MAIN_URL = BASE_URL + "full"
AUDIO_URL = BASE_URL + "audio"
HEADERS = {
    "authority": "kpop.daisuki.com.br",
    "cache-control": "no-cache",
    "cookie": "darkmode=0; _ga=GA1.1.18695438.1657220300; PHPSESSID=88ca8b68a2cf197533f04adb6dd5fef4; _ga_SMTTL4JCBP=GS1.1.1657702070.5.1.1657702156.0",
    "referer": "https://kpop.daisuki.com.br/tools.html",
    "sec-ch-ua": '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "macOS",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
}


def downloadFile(url, path, extractionPath):
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        if response.status_code == 429:
            print("You got throttled!")
        exit(1)

    print("Downloaded file from URL", url)

    open(path, "wb").write(response.content)
    print("Wrote file to", path)

    with zipfile.ZipFile(path, 'r') as zip_ref:
        zip_ref.extractall(extractionPath)
        print("Extracted files to", extractionPath)

        os.remove(path)
        print("Removed zip", path)


downloadFile(MAIN_URL, "/data/main.zip", "/data/")
downloadFile(AUDIO_URL, "/data/audio.zip", "/data/")
