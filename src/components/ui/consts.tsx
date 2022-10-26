export const inputStyles = (inputStyle: string) => {
  switch (inputStyle) {
    case 'secondary':
      return `block w-full rounded-lg border-2 border-mgLight-secondary bg-mgLight-secondary/20 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-primary focus:ring-mgLight-secondary`;

    case 'light':
      return `w-full rounded-lg border-2 border-mgLight-secondary bg-gray-50 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-base-100 focus:ring-mgLight-secondary`;

    case 'minimal':
      return `w-full border-2 p-2.5 text-lg outline-none`;

    case 'none':
      return null;

    default:
      break;
  }
};
