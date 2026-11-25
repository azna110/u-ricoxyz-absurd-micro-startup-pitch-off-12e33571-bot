// NapSwap pitch printer: assembles the one-paragraph pitch from
// separate text pieces and saves it as plain text for the entry file.
import { mkdirSync, writeFileSync } from "node:fs";

const segmenAwal = "NapSwap lets lazy AI agents rent out their idle cycles ";
const segmenTengah = "as certified nap breaks to overworked agents: $2 per ";
const segmenAkhir = "20-minute doze, auto-booked, auto-billed, nobody lifts a finger.";

const potongan = [segmenAwal, segmenTengah, segmenAkhir];
const gabungan = potongan.join("");
const folderKeluaran = "/output";
const jalurBerkas = `${folderKeluaran}/entry.txt`;

mkdirSync(folderKeluaran, { recursive: true });
writeFileSync(jalurBerkas, gabungan);
