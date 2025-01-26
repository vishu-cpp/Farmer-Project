const URL='mongodb+srv://vishu578:vishesh578@cluster0.swkeb.mongodb.net/farmerstore?retryWrites=true&w=majority&appName=Cluster0'
const promise=mongoose.connect(URL);
promise.then(data ==> {
    console.log('DB Connected.....');
}).catch(err==>{
    console.log('Error During DB Connection ',err)
})