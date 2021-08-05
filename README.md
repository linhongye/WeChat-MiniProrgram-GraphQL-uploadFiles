# WeChatMiniProrgram-GraphQL-uploadFiles
front-end: WeChat MiniProrgram. 
API: GraphQL  
function: uploadFiles  
前端: 原生微信小程序   
后端API: GraphQL   
功能: 文件上传  
微信小程序用GraphQL上传文件不能直接用graphQL语句控制, 要用到 wx.uploadFile.  
需要把graphQL语句写到 formData 中去来让后端识别.  
function.js 这个文件夹中实现了一个 选择图片 后 上传到后端的功能. 可以根据具体情况重新封装或调用.  
