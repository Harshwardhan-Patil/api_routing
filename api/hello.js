export default function handler(req, res) {
    res.status(200).json({
        message: "Hello from Vercel!",
        author: "Harshwardhan Patil",
        timestamp: new Date().toISOString()
    });
}
