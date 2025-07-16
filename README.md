# Vendor Comparison Chatbot (Footwear Industry)

An intelligent vendor comparison system that allows users to interactively query footwear-related PDF documents using natural language. Powered by Gradio and Hugging Face, the system extracts insights from unstructured data using advanced NLP, FAISS for semantic search, and real-time response generation — all without a backend server.

---

## 💡 Features

- 📄 Automatic PDF parsing with `PDFMiner`
- ✂️ Smart chunking of long documents for better context management
- 🧠 Embeddings generated via Hugging Face models
- 🔍 Fast semantic retrieval using FAISS vector search
- 🤖 Real-time answer generation using `stablelm-zephyr-3b`
- 💬 Gradio interface for seamless human-AI interaction
- 🖼️ Frontend (React-based UI) connected via Gradio Client

---

## 🔧 Tech Stack

| Component     | Technology                            |
|---------------|----------------------------------------|
| UI            | React.js                               |
| Interaction   | Gradio Client                           |
| PDF Parsing   | PDFMiner                                |
| NLP Models    | Hugging Face (`stablelm-zephyr-3b`)     |
| Retrieval     | FAISS                                   |
| Embeddings    | Hugging Face Transformers               |

---

## 📁 Architecture Overview

```plaintext
React.js Frontend
   ↓ (via Gradio Client)
Gradio Interface (Python)
   ↓
PDFMiner → Text Chunking → Hugging Face Embeddings
   ↓
FAISS Semantic Search
   ↓
Query + Context → stablelm-zephyr-3b (Text Generation)
   ↓
Answer → Shown on Frontend
```

---

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/vendor-comparison-chatbot.git
   cd vendor-comparison-chatbot
   ```

2. **Install Python Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set Hugging Face Token (optional for gated models):**
   ```bash
   export HF_TOKEN=your_huggingface_token
   ```

4. **Run the Notebook:**
   Open `vendor_comparison.ipynb` in Jupyter or Colab and run all cells.

5. **Launch Frontend Connection:**
   Your Gradio interface will generate a public or local URL. Connect this with your React frontend using Gradio Client.

---

## 📚 Key Learnings

- PDF-to-text NLP pipelines using PDFMiner and Hugging Face
- Retrieval-Augmented Generation (RAG) combining FAISS + Transformers
- Gradio’s no-backend deployment capabilities
- Real-time Q&A system creation using only Python and JS frontend
- Embedding-based semantic search and prompt engineering

---

## 📌 Keywords

`Vendor Comparison`, `RAG`, `Gradio`, `Hugging Face`, `FAISS`, `Zephyr Model`, `Footwear`, `React`, `PDF`, `Semantic Search`

---
