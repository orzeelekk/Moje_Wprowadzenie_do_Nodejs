import crypto from 'crypto';
const password1 = "123456"
const password2 = "qwe123"
const password3 = "Rotue11445!%"
const salt = crypto.randomBytes(100).toString('hex')
console.log(salt)
crypto.pbkdf2(password3, salt,1000,512,'sha512',(err,hashedPwd) => {
    // console.log(hashedPwd.toString('hex'))
})
crypto.pbkdf2(password2,salt,10,256,'sha256',(err,hashedPwd) => {
    // console.log(hashedPwd.toString('hex'))
})
crypto.pbkdf2(password1,salt,10,1,'md5',(err,hashedPwd) => {
    console.log(hashedPwd.toString('hex'))
})
