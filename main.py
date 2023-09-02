import requests
from bs4 import BeautifulSoup
import execjs

#参数配置
jsFilePath = "run.js"
params ={
    "city":"北京",
}

#获取页面
pageReq = {
    "url": "http://www.aqistudy.cn/historydata/monthdata.php",
    "params":params,
    "headers" :{
        "Host": "www.aqistudy.cn",
        "Origin": "http://www.aqistudy.cn",
        "Referer": "http://www.aqistudy.cn/historydata/monthdata.php",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    }
}

pageResp = requests.get(url=pageReq["url"],params=pageReq["params"],headers=pageReq["headers"]);

dynamicCodeScriptName = BeautifulSoup(pageResp.text,'html.parser').find_all("script")[2]["src"].split("/")[2]

#获取动态函数
dynamicCodeScript = {
    "url": "http://www.aqistudy.cn/historydata/resource/js/"+dynamicCodeScriptName,
    "headers" :{
        "Host": "www.aqistudy.cn",
        "Origin": "http://www.aqistudy.cn",
        "Referer": "http://www.aqistudy.cn/historydata/monthdata.php",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    }
}

dynamicCodeScriptResp = requests.get(url=dynamicCodeScript["url"],headers=dynamicCodeScript["headers"])
code = dynamicCodeScriptResp.text
code = code.replace(r"return p", 'code=p;return p;') #改变动态函数,增加hook代码

#将动态函数注入到js文件里
fp = open(jsFilePath,mode="r",encoding="utf-8")
lines = []
isfind = False
for line in fp:
    if "###此处注入js执行代码###" in line:
        isfind = True
        lines.append(line)
    else:
        if isfind:
            lines.append("        "+code)
            isfind = False
        else:
            lines.append(line)
s = ''.join(lines)

fp = open(jsFilePath,mode='w',encoding="utf-8")
fp.write(s)
fp.close()

#执行函数获取参数
with open(jsFilePath,encoding="utf-8") as f:
    js = f.read()

docJs = execjs.compile(js)

res = docJs.call("exec",params,"getParam")

#开始爬取数据

url = "http://www.aqistudy.cn/historydata/api/historyapi.php"
data = {}
data[res["key"]] = res["val"]

headers = {
    "Host": "www.aqistudy.cn",
    "Origin": "http://www.aqistudy.cn",
    "Referer": "http://www.aqistudy.cn/historydata/monthdata.php",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
}

resp = requests.post(url, data=data, headers=headers)

#执行函数解密
with open(jsFilePath,encoding="utf-8") as f:
    js = f.read()

docJs = execjs.compile(js)
res = docJs.call("exec",resp.text,"decode")
print(res)