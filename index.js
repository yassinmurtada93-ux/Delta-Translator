const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// مسار استقبال طلبات الترجمة الفورية الحية من روبلوكس
app.post('/translate', async (req, res) => {
    const { text, target } = req.body;
    
    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }

    try {
        console.log(`[yu & ahm] Received text: ${text}`);
        
        // هنا يمكنك إضافة منطق الترجمة أو إرجاع النص
        let translatedText = text; 

        res.json({ translatedText: translatedText });
    } catch (error) {
        res.status(500).json({ error: 'Translation failed' });
    }
});

app.listen(PORT, () => {
    console.log(`yu & ahm Server is running on port ${PORT}`);
});

