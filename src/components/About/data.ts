const getAge = (dateString: string) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const about = {
  picture: '/avatar.jpg',
  description: [
    `I live in Jawa Tengah, Indonesia. I was born in Kudus, 22 April 1999. I'm ${getAge(
      '1999-04-22'
    )} years old. I graduated with a bachelor's degree in informatics engineering at Muria Kudus University. `,
  ],
};
