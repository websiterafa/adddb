export default async function handler(req, res) {
  const rawUrl = "https://raw.githubusercontent.com/websiterafa/Dbv10/refs/heads/main/dbv10.json";

  try {
    const response = await fetch(rawUrl);
    if (!response.ok) throw new Error("Gagal ambil data");

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: "❌ Gagal mengambil data",
      error: err.message,
    });
  }
}