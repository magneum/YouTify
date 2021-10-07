// ====================================================—••÷[🍏YouTify™]÷••—====================================================
//                          GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
import ytdl, { downloadOptions } from "ytdl-core";
import { opus as Opus, FFmpeg } from "prism-media";
import { Readable, Duplex } from "stream";
interface YTDLStreamOptions extends downloadOptions {
    seek?: number;
    encoderArgs?: string[];
    fmt?: string;
    opusEncoded?: boolean;
}
interface StreamOptions {
    seek?: number;
    encoderArgs?: string[];
    fmt?: string;
    opusEncoded?: boolean;
}
declare const DiscordYTDLCore: {
    (url: string, options: YTDLStreamOptions): Opus.Encoder | FFmpeg;
    arbitraryStream: (stream: string | Readable | Duplex, options: StreamOptions) => Opus.Encoder | FFmpeg;
    downloadFromInfo: (info: ytdl.videoInfo, options: YTDLStreamOptions) => Opus.Encoder | FFmpeg;
} & typeof ytdl;
export = DiscordYTDLCore;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
//                          GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================