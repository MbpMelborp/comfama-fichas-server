export default defineEventHandler((event) => {
    console.log("test")
    return {
        hello: 'world'
    }
})