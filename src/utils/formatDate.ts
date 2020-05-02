const formatDate = (dateString: string): string =>
  Intl.DateTimeFormat('pt-BR').format(new Date(dateString)); // TODO

export default formatDate;
