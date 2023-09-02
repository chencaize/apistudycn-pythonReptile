var { encrpt, detect, decode } = require("./vir");

var getScript = function ({ p, a, c, k, e, d }) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
        ;
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
            return d[e]
        }
        ];
        e = function () {
            return '\\w+'
        }
            ;
        c = 1
    }
    ; while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
};

var dynamicCodeHelper = {
    exec(param, mode) {

        //初始化node环境
        eval(getScript(encrpt));
        eval(getScript(detect));
        eval(getScript(decode));

        let code = ""; //代码

        /** ###此处注入js执行代码### 请确保下一行没有任何代码*/
        eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}code=p;return p;}('k(4(\'5+0+6+1/7/8+9+a+3+c+b/e/f+0+g+0+h+1/i+j+d+2\'))',21,21,'8jOWPr|G6ZKl5YGP56e76YePSVbvvIzlj6|IDApIHsKICAgICAgICAgICAgICAgICAgICAgIG9ZU1c2UC5yZXN1bHQudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpOwogICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlVXRpbC5zYXZlKGtYeUwsIG9ZU1c2UC5yZXN1bHQpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBjdlJJZnBVTnMob1lTVzZQLnJlc3VsdCk7CiAgICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9ZU1c2UC5lcnJjb2RlLCBvWVNXNlAuZXJybXNnKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgfSBlbHNlIHsKICAgICAgICBjdlJJZnBVTnMoZFA3bTkpOwogICAgfQp9|mHj0lW77yM5Y|dweklxde|Y29uc3QgIGFzazBNOTA2dmVodSA9ICJhZDJybktwSXpWM2p3empHIjsvL0FFU2tlee|iHquWumuS5iQpjb25zdCAgYXNpdXhGeVlMc000ID0gImJIaHo1UjM4NHZTOWdtUmMiOy8v5a|oh6rlrprkuYkKCmNvbnN0ICBhY2tFdldua2VtRE4gPSAiZE1UMGFXaXNiTWNYeml3TyI7Ly9BRVNrZXnvvIzlj6|oh6rlrprkuYkKY29uc3QgIGFjaVpTZTNjbW9xaCA9ICJmS2x2UnUyRUl0VHprdWdVIjsvL|WvhumSpeWBj|enu|v6Ieq5a6a5LmJCmNvbnN0ICBkc2l1dFlBb0dIdzIgPSAieHhZbTdnTVJaVXk0Q01ucyI7Ly|v6Ieq5a6a5LmJCgpjb25zdCAgZHNrT2pYU0hjVUlhID0gImhsVWVTdmw5S2FIWHI0MWgiOy8vREVTa2V577yM5Y|PSAwICYmIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA8IDUgJiYgcGVyaW9kID4gMSkgewogICAgICAgICAgICBwZXJpb2QgPSAxOwogICAgICAgIH0KICAgICAgICBpZiAoY3VycmVudCAtIChwZXJpb2QgKiA2MCAqIDYwICogMTAwMCkgPiB0aW1lKSB7IC8vIOabtOaWsAogICAgICAgICAgIGRhdGEgPSBudWxsOwogICAgICAgIH0KICAgICAgICAvLyDpmLLmraIxLTXngrnnlKjmiLfkuI3miZPlvIDpobXpnaLvvIzot6jlpKnnmoTmg4XlhrUKICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRIb3VycygpID49IDUgJiYgbmV3IERhdGUodGltZSkuZ2V0RGF0ZSgpICE9PSBuZXcgRGF0ZSgpLmdldERhdGUoKSAmJiBwZXJpb2QgPT09IDI0KSB7CiAgICAgICAgICAgZGF0YSA9IG51bGw7CiAgICAgICAgfQogICAgfQogICAgcmV0dXJuIGRhdGE7Cn0KCmZ1bmN0aW9uIG9zUDlFSjFjTW0ob2JqKSB7CiAgICB2YXIgbmV3T2JqZWN0ID0ge307CiAgICBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24oa2V5KXsKICAgICAgbmV3T2JqZWN0W2tleV0gPSBvYmpba2V5XTsKICAgIH0pOwogICAgcmV0dXJuIG5ld09iamVjdDsKfQpmdW5jdGlvbiBkNVlvVEt6d0V6clcwQVpQKGRhdGEpIHsKICAgIGRhdGEgPSBCQVNFNjQuZGVjcnlwdChkYXRhKTsKICAgIGRhdGEgPSBERVMuZGVjcnlwdChkYXRhLCBkc2tPalhTSGNVSWEsIGRzaXV0WUFvR0h3Mik7CiAgICBkYXRhID0gQUVTLmRlY3J5cHQoZGF0YSwgYXNrME05MDZ2ZWh1LCBhc2l1eEZ5WUxzTTQpOwogICAgZGF0YSA9IEJBU0U2NC5kZWNyeXB0KGRhdGEpOwogICAgcmV0dXJuIGRhdGE7Cn0KdmFyIHBCdTJLd3FKUXogPSAoZnVuY3Rpb24oKXsKCmZ1bmN0aW9uIG9zUDlFSjFjTW0ob2JqKXsKICAgIHZhciBuZXdPYmplY3QgPSB7fTsKICAgIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLm1hcChmdW5jdGlvbihrZXkpewogICAgICAgIG5ld09iamVjdFtrZXldID0gb2JqW2tleV07CiAgICB9KTsKICAgIHJldHVybiBuZXdPYmplY3Q7Cn0KcmV0dXJuIGZ1bmN0aW9uKG1tZWM4cW1EViwgb1lTVzZQKXsKICAgIHZhciBhSDJSID0gJ2JjNGRhMTAwMzU5ZmM3ODY0MDBlMTJhYTgyYzAyZGI2JzsKICAgIHZhciBjSGlreCA9ICdXRUInOwogICAgdmFyIHRwVEpnZGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTsKCiAgICB2YXIgcEtaUjhUUiA9IHsKICAgICAgYXBwSWQ6IGFIMlIsCiAgICAgIG1ldGhvZDogbW1lYzhxbURWLAogICAgICB0aW1lc3RhbXA6IHRwVEpnZGQsCiAgICAgIGNsaWVudHR5cGU6IGNIaWt4LAogICAgICBvYmplY3Q6IG9ZU1c2UCwKICAgICAgc2VjcmV0OiBoZXhfbWQ1KGFIMlIgKyBtbWVjOHFtRFYgKyB0cFRKZ2RkICsgY0hpa3ggKyBKU09OLnN0cmluZ2lmeShvc1A5RUoxY01tKG9ZU1c2UCkpKQogICAgfTsKICAgIHBLWlI4VFIgPSBCQVNFNjQuZW5jcnlwdChKU09OLnN0cmluZ2lmeShwS1pSOFRSKSk7CiAgICBwS1pSOFRSID0gQUVTLmVuY3J5cHQocEtaUjhUUiwgYWNrRXZXbmtlbUROLCBhY2laU2UzY21vcWgpOwogICAgcmV0dXJuIHBLWlI4VFI7Cn07Cn0pKCk7CgpmdW5jdGlvbiBzeGFwWTVBalMzVVM4ZWQwKG1tZWM4cW1EViwgb1pXbzBRRnFBQiwgY3ZSSWZwVU5zLCBwUHNsS2Q0KSB7CiAgICBjb25zdCBrWHlMID0gaGV4X21kNShtbWVjOHFtRFYgKyBKU09OLnN0cmluZ2lmeShvWldvMFFGcUFCKSk7CgogICAgY29uc3QgZFA3bTkgPSBnWVptY2R4OXlYeUNNMzRZKGtYeUwsIHBQc2xLZDQpOwogICAgaWYgKCFkUDdtOSkgewogICAgICAgIHZhciBwS1pSOFRSID0gcEJ1Mkt3cUpReihtbWVjOHFtRFYsIG9aV28wUUZxQUIpOwogICAgICAgICQuYWpheCh7CiAgICAgICAgICAgIHVybDogJ2FwaS9oaXN0b3J5YXBpLnBocCcsCiAgICAgICAgICAgIGRhdGE6IHsgaDhrbGkyVklGOiBwS1pSOFRSIH0sCiAgICAgICAgICAgIHR5cGU6ICJwb3N0IiwKICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRQN205KSB7CiAgICAgICAgICAgICAgICBkUDdtOSA9IGQ1WW9US3p3RXpyVzBBWlAoZFA3bTkpOwogICAgICAgICAgICAgICAgb1lTVzZQID0gSlNPTi5wYXJzZShkUDdtOSk7CiAgICAgICAgICAgICAgICBpZiAob1lTVzZQLnN1Y2Nlc3MpIHsKICAgICAgICAgICAgICAgICAgICBpZiAocFBzbEtkNCA|lr4bpkqXlgY|np7vph49JVu|iHquWumuS5iQoKY29uc3QgIGRjazlQeG0zTThxNSA9ICJvVUVHSmlJczZ4S1RhTGgwIjsvL0RFU2tlee|iHquWumuS5iQpjb25zdCAgZGNpdHNMd1dhdUR4ID0gInBka2h5Qk9tUHUyTGdDWlUiOy8v5a|oh6rlrprkuYkKCmNvbnN0IGFlc19sb2NhbF9rZXkgPSAnZW1obGJuRnBjR0ZzYld0bGVRPT0nOwpjb25zdCBhZXNfbG9jYWxfaXYgPSAnZW1obGJuRnBjR0ZzYldsMic7Cgp2YXIgQkFTRTY0ID0gewogICAgZW5jcnlwdDogZnVuY3Rpb24odGV4dCkgewogICAgICAgIHZhciBiID0gbmV3IEJhc2U2NCgpOwogICAgICAgIHJldHVybiBiLmVuY29kZSh0ZXh0KTsKICAgIH0sCiAgICBkZWNyeXB0OiBmdW5jdGlvbih0ZXh0KSB7CiAgICAgICAgdmFyIGIgPSBuZXcgQmFzZTY0KCk7CiAgICAgICAgcmV0dXJuIGIuZGVjb2RlKHRleHQpOwogICAgfQp9OwoKdmFyIERFUyA9IHsKIGVuY3J5cHQ6IGZ1bmN0aW9uKHRleHQsIGtleSwgaXYpewogICAgdmFyIHNlY3JldGtleSA9IChDcnlwdG9KUy5NRDUoa2V5KS50b1N0cmluZygpKS5zdWJzdHIoMCwgMTYpOwogICAgdmFyIHNlY3JldGl2ID0gKENyeXB0b0pTLk1ENShpdikudG9TdHJpbmcoKSkuc3Vic3RyKDI0LCA4KTsKICAgIHNlY3JldGtleSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHNlY3JldGtleSk7CiAgICBzZWNyZXRpdiA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHNlY3JldGl2KTsKICAgIHZhciByZXN1bHQgPSBDcnlwdG9KUy5ERVMuZW5jcnlwdCh0ZXh0LCBzZWNyZXRrZXksIHsKICAgICAgaXY6IHNlY3JldGl2LAogICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQywKICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBrY3M3CiAgICB9KTsKICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoKTsKIH0sCiBkZWNyeXB0OiBmdW5jdGlvbih0ZXh0LCBrZXksIGl2KXsKICAgIHZhciBzZWNyZXRrZXkgPSAoQ3J5cHRvSlMuTUQ1KGtleSkudG9TdHJpbmcoKSkuc3Vic3RyKDAsIDE2KTsKICAgIHZhciBzZWNyZXRpdiA9IChDcnlwdG9KUy5NRDUoaXYpLnRvU3RyaW5nKCkpLnN1YnN0cigyNCwgOCk7CiAgICBzZWNyZXRrZXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShzZWNyZXRrZXkpOwogICAgc2VjcmV0aXYgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShzZWNyZXRpdik7CiAgICB2YXIgcmVzdWx0ID0gQ3J5cHRvSlMuREVTLmRlY3J5cHQodGV4dCwgc2VjcmV0a2V5LCB7CiAgICAgIGl2OiBzZWNyZXRpdiwKICAgICAgbW9kZTogQ3J5cHRvSlMubW9kZS5DQkMsCiAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5Qa2NzNwogICAgfSk7CiAgICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTsKICB9Cn07Cgp2YXIgQUVTID0gewogIGVuY3J5cHQ6IGZ1bmN0aW9uKHRleHQsIGtleSwgaXYpIHsKICAgIHZhciBzZWNyZXRrZXkgPSAoQ3J5cHRvSlMuTUQ1KGtleSkudG9TdHJpbmcoKSkuc3Vic3RyKDE2LCAxNik7CiAgICB2YXIgc2VjcmV0aXYgPSAoQ3J5cHRvSlMuTUQ1KGl2KS50b1N0cmluZygpKS5zdWJzdHIoMCwgMTYpOwogICAgLy8gY29uc29sZS5sb2coJ3JlYWwga2V5OicsIHNlY3JldGtleSk7CiAgICAvLyBjb25zb2xlLmxvZygncmVhbCBpdjonLCBzZWNyZXRpdik7CiAgICBzZWNyZXRrZXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShzZWNyZXRrZXkpOwogICAgc2VjcmV0aXYgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShzZWNyZXRpdik7CiAgICB2YXIgcmVzdWx0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQodGV4dCwgc2VjcmV0a2V5LCB7CiAgICAgIGl2OiBzZWNyZXRpdiwKICAgICAgbW9kZTogQ3J5cHRvSlMubW9kZS5DQkMsCiAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5Qa2NzNwogICAgfSk7CiAgICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7CiAgfSwKICBkZWNyeXB0OiBmdW5jdGlvbih0ZXh0LCBrZXksIGl2KSB7CiAgICB2YXIgc2VjcmV0a2V5ID0gKENyeXB0b0pTLk1ENShrZXkpLnRvU3RyaW5nKCkpLnN1YnN0cigxNiwgMTYpOwogICAgdmFyIHNlY3JldGl2ID0gKENyeXB0b0pTLk1ENShpdikudG9TdHJpbmcoKSkuc3Vic3RyKDAsIDE2KTsKICAgIHNlY3JldGtleSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHNlY3JldGtleSk7CiAgICBzZWNyZXRpdiA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHNlY3JldGl2KTsKICAgIHZhciByZXN1bHQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh0ZXh0LCBzZWNyZXRrZXksIHsKICAgICAgaXY6IHNlY3JldGl2LAogICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQywKICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBrY3M3CiAgICB9KTsKICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpOwogIH0KfTsKCnZhciBsb2NhbFN0b3JhZ2VVdGlsID0gewogIHNhdmU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7CiAgICB2YXIgdGV4dCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTsKICAgIHRleHQgPSBCQVNFNjQuZW5jcnlwdCh0ZXh0KTsKICAgIHRleHQgPSBBRVMuZW5jcnlwdCh0ZXh0LCBhZXNfbG9jYWxfa2V5LCBhZXNfbG9jYWxfaXYpOwogICAgdHJ5IHsKICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdGV4dCk7CiAgICB9IGNhdGNoIChvRXhjZXB0aW9uKSB7CiAgICAgIGlmIChvRXhjZXB0aW9uLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InKSB7CiAgICAgICAgY29uc29sZS5sb2coJ0xvY2FsIGxpbWl0IGV4Y2VlZGVkJyk7CiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7CiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdGV4dCk7CiAgICAgIH0KICAgIH0KICB9LAogIGNoZWNrOiBmdW5jdGlvbihuYW1lKSB7CiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7CiAgfSwKICBnZXRWYWx1ZTogZnVuY3Rpb24obmFtZSkgewogICAgdmFyIHRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTsKICAgIHZhciByZXN1bHQgPSBudWxsOwogICAgaWYgKHRleHQpIHsKICAgICAgdGV4dCA9IEFFUy5kZWNyeXB0KHRleHQsIGFlc19sb2NhbF9rZXksIGFlc19sb2NhbF9pdik7CiAgICAgIHRleHQgPSBCQVNFNjQuZGVjcnlwdCh0ZXh0KTsKICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZSh0ZXh0KTsKICAgIH0KICAgIHJldHVybiByZXN1bHQ7CiAgfSwKICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHsKICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpOwogIH0KfTsKCi8vIGNvbnNvbGUubG9nKCdiYXNlNjQnLCBCQVNFNjQuZW5jcnlwdCgna2V5JykpOwoKZnVuY3Rpb24gZGZ0cTVSbFRXZWgocEtaUjhUUikgewogIHBLWlI4VFIgPSBBRVMuZGVjcnlwdChwS1pSOFRSLCBhc2swTTkwNnZlaHUsIGFzaXV4RnlZTHNNNCk7CiAgcmV0dXJuIHBLWlI4VFI7Cn0KCmZ1bmN0aW9uIGRrSlVUUTh5SFEocEtaUjhUUikgewogIHBLWlI4VFIgPSBERVMuZGVjcnlwdChwS1pSOFRSLCBkc2tPalhTSGNVSWEsIGRzaXV0WUFvR0h3Mik7CiAgcmV0dXJuIHBLWlI4VFI7Cn0KCmZ1bmN0aW9uIGdZWm1jZHg5eVh5Q00zNFkoa2V5LCBwZXJpb2QpIHsKICAgIGlmICh0eXBlb2YgcGVyaW9kID09PSAndW5kZWZpbmVkJykgewogICAgICAgIHBlcmlvZCA9IDA7CiAgICB9CiAgICB2YXIgZCA9IERFUy5lbmNyeXB0KGtleSk7CiAgICBkID0gQkFTRTY0LmVuY3J5cHQoa2V5KTsKICAgIHZhciBkYXRhID0gbG9jYWxTdG9yYWdlVXRpbC5nZXRWYWx1ZShrZXkpOwogICAgaWYgKGRhdGEpIHsgLy8g5Yik5pat5piv5ZCm6L|H5pyfCiAgICAgICAgY29uc3QgdGltZSA9IGRhdGEudGltZTsKICAgICAgICBjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7CiAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA|eval'.split('|'),0,{}))

        //从动态代码里获得对应参数
        let obj = {
            code:"",//服务器返回的动态代码
            key: "",//key
            encodeFunc: "",//加密函数
            decodeFunc: "",//解密函数
        };

        try {
            if (code == "" || code == undefined || code == null) {
                throw Error("code is null");
            } else if (code.includes("dweklxde")) {
                let dweklxdeKey = /dweklxde\(\'(.*)(?=\')/g.exec(code)[1];

                if (code.indexOf("dweklxde\(dweklxde\(") != -1) {
                    eval(`_code = dweklxde(dweklxde('${dweklxdeKey}='))`);
                } else {
                    eval(`_code = dweklxde('${dweklxdeKey}')`);
                }

                obj.code = _code;

                
                _code = _code.split("\n");

                obj.key = /(?<=\{)\s+(\w+)(?=\:)/g.exec(_code[201])[1];
                obj.encodeFunc = /(?<=\=)\s+(\w+)(?=\()/g.exec(_code[198])[1];
                obj.decodeFunc = /(?<=\=)\s+(\w+)(?=\()/g.exec(_code[204])[1];

            } else {
                let _code = code;

                obj.code = _code;

                _code = _code.split(";");
                
                obj.key = /(?<=data)\:\{(\w+)\:/g.exec(_code[69])[1];
                obj.encodeFunc = /=(\w+)\(/g.exec(_code[68])[1];
                obj.decodeFunc = /(?<=\=)(\w+)(?=\()/g.exec(_code[69])[1];
                
            }
        } catch (error) {
            console.error(error);
            return error;
        }

        eval(obj.code);

        if (mode == "getParam") {
            let key = obj.key;
            let val = "";
            eval(`val = ${obj.encodeFunc}("GETMONTHDATA",${JSON.stringify(param)})`);
            return { key, val };
        } else if (mode == "decode") {
            eval(`val = ${obj.decodeFunc}("${param}")`);
            return val;
        }
    },
}

function exec(param, mode) {
    return dynamicCodeHelper.exec(param, mode);
}

console.log(exec({ "city": "北京" }, "getParam"));