const Fs = require("fs");
const {
  YouTIFY,
  f,
  YouTifiedFilesSoundMake,
  CodeErrorDes,
  YouTifyReadyLoger,
} = require("./ʏօʊȶɨʄʏքʟǟʏɛʀ/YouTify™..js");
const ᴄʜᴀʟᴋ = require("chalk");
const Jdk = ["Music", "Filters", "System"];
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
async function JdkYFCheck() {
  Jdk.forEach((JdkCtg) => {
    Fs.readdir(`./ʏօʊȶɨʄʏʐɛռɛֆɨֆ/${JdkCtg}`, (error, Files) => {
      if (error) throw error;
      Files.forEach((Jdkfl) => {
        if (!Jdkfl.endsWith(f)) {
          console.log(
            ᴄʜᴀʟᴋ.red(
              "YouTify's Files have been corrupted!\n\n.. Please never again."
            )
          );
          process.exit(1);
        }
        // ===========================================================================================================================
        // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
        // ===========================================================================================================================
        const YouGenenis = require(`./ʏօʊȶɨʄʏʐɛռɛֆɨֆ/${JdkCtg}/${Jdkfl}`);
        if (
          !YouGenenis.help.name ||
          !YouGenenis.help.aliases ||
          !YouGenenis.help.yougen
        ) {
          console.log(
            ᴄʜᴀʟᴋ.bold.rgb(165, 19, 0)("YOUTIFY's = ❌ ="),
            ᴄʜᴀʟᴋ.italic.yellow(
              `**${
                YouGenenis.help.name ? YouGenenis.help.name : "Not_Defined"
              }**`
            ),
            ᴄʜᴀʟᴋ.red(`-  SymLink File error`)
          );
        }
        // ===========================================================================================================================
        // 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
        // ===========================================================================================================================
        YouTIFY.commands.set(YouGenenis.help.name, YouGenenis);
        YouGenenis.help.aliases
          ? YouGenenis.help.aliases.forEach((Alias) =>
              YouTIFY.aliases.set(Alias, YouGenenis.help.name)
            )
          : (YouGenenis.help.aliases = null);
        console.log(
          ᴄʜᴀʟᴋ.bold.rgb(67, 116, 90)("YOUTIFY's = ⚡ ="),
          ᴄʜᴀʟᴋ.green(`>  ${YouGenenis.help.name}`),
          ᴄʜᴀʟᴋ.white(`+  Command has been re-loaded!`)
        );
      });
    });
  });
}
// ===========================================================================================================================
// 🎧𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord..js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
YouTIFY.on("ready", async () => {
  console.clear();
  await JdkYFCheck();
  console.log(ᴄʜᴀʟᴋ.yellow("==========================="));
  await YouTifiedFilesSoundMake();
  console.log(ᴄʜᴀʟᴋ.yellow("==========================="));
  await CodeErrorDes();
  console.log(ᴄʜᴀʟᴋ.yellow("==========================="));
  await YouTifyReadyLoger();
  console.log(ᴄʜᴀʟᴋ.yellow("==========================="));
});
