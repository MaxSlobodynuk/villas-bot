const firstText = (name) => {
  const htmlMessageStart = `
<b>SHEPIT.villas</b> – довершений смак заміського життя 🏡

🍃 До центру Києва 35 хвилин
🍃 Вся необхідна інфраструктура 
🍃 Власний пляж та причал
🍃 7,5 га розкішної тиші та комфорту

<b>${name} оберіть, будь ласка, що вас цікавить:</b>
`;
  return htmlMessageStart;
};

const locationText = () => {
  const htmlMessageLocation = `
Клубне містечко Shepit Villas

Розташоване серед соснового лісу та на березі затоки Дніпра.

За адресою <a href="https://www.google.com/maps/place/50°39'59.8%22N+30°31'25.6%22E/@50.6666111,30.5237778,583m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d50.6666111!4d30.5237778?entry=ttu">Вишгородський райно с. Лебедівка </a>
`;
  return htmlMessageLocation;
};

const getText = () => {
  const htmlMessageGet = `
У клубному містечку Shepit Villas є 47 преміальних котеджів.

<b>Оберіть яка площа вас цікавить</b>
`;
  return htmlMessageGet;
};

const villasText = (name, area, landArea) => {
  const htmlMessageVillas = `
<b>${name}🍃</b>

Дім: ${area} м²

Ділянка: ${landArea} ГА
`;
  return htmlMessageVillas;
};

const thankText = () => {
  const htmlMessageThank = `
Дякуємо вам за ваші відповіді!

<b>Щоб отримати більше інформації, залиште, будь ласка, свої контактні дані.</b>
`;
  return htmlMessageThank;
};

const feedbackText = (firstName, lastName, phoneNumber) => {
  const htmlMessageFeedback = `
Дякуємо, ${firstName}${lastName}! Ваш номер телефону: ${phoneNumber}.

Очікуйте на дзвінок найшого менеджера!
`;
  return htmlMessageFeedback;
};

const repeatText = () => {
  const htmlMessageRepeat = `
Ми вже підготували для вас пропозицію.

Залиште свій номер телефону, щоб наш менеджер зв'язався з вами.
`;
  return htmlMessageRepeat;
};

const contactsForChatText = (firstName, lastName, phoneNumber) => {
  const htmlMessageContacts = `
Нові контактні дані:
Ім'я: ${firstName} ${lastName}
Номер телефону: ${phoneNumber}
`;
  return htmlMessageContacts;
};

module.exports = {
  firstText,
  locationText,
  getText,
  villasText,
  thankText,
  feedbackText,
  repeatText,
  contactsForChatText,
};
