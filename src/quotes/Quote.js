function Quote(quoteData) {
  console.log(quoteData);
  return (
    <figure key={quoteData.id}>
      <div className="quoteImage">
        {" "}
        <img
          src={"/images/" + quoteData.character.avatar}
          alt={quoteData.character.firstName}
          width="100"
          height="100"
        />
      </div>

      <blockquote>
        <p className="text-2xl">{quoteData.quote}</p>
      </blockquote>
      <figcaption className="text-center my-8 text-blue-500">
        ~ {quoteData.character.firstName} {quoteData.character.lastName}
      </figcaption>
    </figure>
  );
}

export default Quote;
