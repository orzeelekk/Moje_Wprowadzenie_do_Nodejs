require('dotenv').config()
function main() {
  if (process.env.MONGO_URL && process.env.SUPER_SECRET_KEY) {
    // console.log(process.env)
    console.log(process.env.MONGO_URL)
    console.log(process.env.SUPER_SECRET_KEY)
  }
  else {
    throw new Error("No process.env MONGO_URL & SUPER_SECRET_KEY")
  }
}
main()
