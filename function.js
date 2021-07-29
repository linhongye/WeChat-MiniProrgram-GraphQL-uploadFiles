tapUpload(){
    console.log("upload button tapped")
    wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths
        console.log("the file path >>", tempFilePaths)
        wx.uploadFile({
          url: '', // 你的后端地址
          filePath: tempFilePaths[0],
          name: '0',
          header: {
            "Content-Type": "multipart/form-data",
            "Authorization": "" // 登录信息, 根据后端要求, 这行可删可改
          },
          // formData 里面实际上就是正常的graphql api写法, 稍微换了一下格式, 用过graphql一定能看出来, 然后根据自己后端调整具体内容
          // formData 中 map 后的文件名和 wx.uploadFile 中 name 相同
          formData: {
            'operations': '{"operationName":"uploadImage",
                "variables":{
                  "input":{"altText":"图片加载失败","file":null}
                },
            "query":`mutation uploadImage($input: UploadImageInput!) {\\n  
              uploadImage(input: $input) {\\n 
                image {\\n 
                  ...ImageParts\\n 
                }\\n 
              }\\n
            }\\n
            fragment ImageParts on Image {\\n 
              id\\n 
              src\\n 
              altText\\n
            }\\n"}`,
            'map' : '{"0":["variables.input.file"]}'
          },
          success (res){
            const data = res.data
            console.log("upload res >>", res.data.json())
            //do something
          }
        })
      }
    })
  }
