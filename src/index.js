const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
const myChatId = require("./config");

const photoPath = "./assets/images/location.jpg";
const villasData = require("./villas");
const {
  firstText,
  locationText,
  getText,
  villasText,
  thankText,
  feedbackText,
  repeatText,
  contactsForChatText,
} = require("./message");
const {
  inline_keyboard,
  keyboard_location,
  keyboard_get,
  keyboard_villas,
  keyboard_contacts,
} = require("./buttons");


const bot = new TelegramBot(config.TOKEN, { polling: true });
const usersWithoutContacts = [];

const url = "https://shepit.fun/";
bot.setWebHook(url);


bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  switch (query.data) {
    case "location":
      bot.sendPhoto(chatId, photoPath, {
        caption: locationText(),
        reply_markup: {
          inline_keyboard: keyboard_location,
        },
        parse_mode: "HTML",
      });
      break;

    case "get":
      bot.sendMessage(chatId, getText(), {
        reply_markup: {
          inline_keyboard: keyboard_get,
        },
        parse_mode: "HTML",
      });
      break;

    case "small":
      const smallVillas = villasData.filter(
        (villa) => villa.area >= 170 && villa.area <= 220
      );
      smallVillas.forEach((villa) => {
        const { name, area, url, landArea } = villa;
        bot.sendPhoto(chatId, url, {
          caption: villasText(name, area, landArea),
          reply_markup: {
            inline_keyboard: keyboard_villas,
          },
          parse_mode: "HTML",
        });
      });
      break;

    case "medium":
      const mediumVillas = villasData.filter(
        (villa) => villa.area >= 220 && villa.area <= 320
      );
      mediumVillas.forEach((villa) => {
        const { name, area, url, landArea } = villa;
        bot.sendPhoto(chatId, url, {
          caption: villasText(name, area, landArea),
          reply_markup: {
            inline_keyboard: keyboard_villas,
          },
          parse_mode: "HTML",
        });
      });
      break;

    case "big":
      const bigVillas = villasData.filter(
        (villa) => villa.area >= 320 && villa.area <= 500
      );
      bigVillas.forEach((villa) => {
        const { name, area, url, landArea } = villa;
        bot.sendPhoto(chatId, url, {
          caption: villasText(name, area, landArea),
          reply_markup: {
            inline_keyboard: keyboard_villas,
          },
          parse_mode: "HTML",
        });
      });
      break;

    case "villas":
      bot.sendMessage(chatId, thankText(), {
        reply_markup: {
          keyboard: keyboard_contacts,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
        parse_mode: "HTML",
      });
      usersWithoutContacts.push(chatId);
      break;
  }
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, firstText(msg.from.first_name), {
    reply_markup: {
      inline_keyboard,
    },
    parse_mode: "HTML",
  });
});

bot.on("contact", (msg) => {
  const chatId = msg.chat.id;
  const phoneNumber = msg.contact.phone_number;
  const firstName = msg.contact.first_name;
  const lastName = msg.contact.last_name || "";

  bot.sendMessage(chatId, feedbackText(firstName, lastName, phoneNumber));

   bot.sendMessage(
     config.MYCHATID,
     contactsForChatText(firstName, lastName, phoneNumber)
   );
  
    const index = usersWithoutContacts.indexOf(chatId);
    if (index !== -1) {
      usersWithoutContacts.splice(index, 1); // Видалити chatId з масиву
    }
});

setInterval(() => {
  if (usersWithoutContacts.length > 0) {
    usersWithoutContacts.forEach((chatId) => {
      bot.sendMessage(chatId, repeatText(), {
        reply_markup: {
          keyboard: keyboard_contacts,
          resize_keyboard: true,
          one_time_keyboard: true,
        },
        parse_mode: "HTML",
      });
    });
  }
}, 3 * 60 * 60 * 1000);
