import React from 'react';

const Factoid = ({ date, description, category1, category2 }) => {
  if (!date) return null;

  if (date[0] === '-') {
    date = date.slice(1) + ' BCE';
  }

  let place = null;
  if (category1 === 'By place') {
    place = category2;
  }

  let title, url, author, first, last, publisher, source, ref;
  let cite = description.match(/{{cite.*/);
  if (cite) {
    description = description.slice(0, cite.index);
    title = cite[0].match(/\|title.*?\|/);
    title ? (title = title[0].slice(7, -1)) : null;
    if (title && title.indexOf('http') > 0) {
      title = null;
    }
    url = cite[0].match(/\|url.*?\|/);
    url ? (url = url[0].slice(5, -1)) : null;
    if (url) {
      url = url.replace('<a href="', '');
      url = url.replace(/">.*/g, '');
    }
    author = cite[0].match(/\|author.*?\|/);
    author ? (author = author[0].slice(8, -1)) : null;
    if (!author) {
      first = cite[0].match(/\|first.*?\|/);
      last = cite[0].match(/\|last.*?\|/);
      first ? (first = first[0].slice(7, -1)) : '';
      last ? (last = last[0].slice(6, -1)) : '';
      if (first && last) {
        author = first + ' ' + last;
        author = author.replace(/=/g, '');
      }
    }
    publisher = cite[0].match(/\|publisher.*?\|/);
    publisher ? (publisher = publisher[0].slice(11, -1)) : null;
    if (publisher) {
      publisher = publisher.replace(' amp ', ' & ');
    }
    source = cite[0].match(/ampamp.*ampamp/);
    source ? (source = source[0].slice(6, -6)) : null;
    if (source && source.indexOf('{{cite') > 0) source = null;
    ref = cite[0].match(/ref name=.*/);
    ref ? (ref = ref[0].slice(6, -6)) : null;
  }

  // remove unit conversions
  description = description.replace(/{{convert\|(\d+)\|(\w+).*?}}/, '$1 $2');
  // remove misformattings
  description = description.replace(/ ampampndash/g, '–');
  description = description.replace(/ampampndash/g, '–');
  description = description.replace(/ampndash/g, '–');
  description = description.replace(/ampquot/g, '"');
  description = description.replace(/ampamp.*?ampamp/, '');
  description = description.replace(/ref name=.*?/, '');
  description = description.replace(/ amp /g, ' & ');
  description = description.replace(/ampamp/g, '');
  description = description.replace(/<a href="?/g, '');
  description = description.replace(/">.*>/g, '');
  // description = description.replace(/quot([^ea])/g, '"$1')

  return (
    <div className="factoid" key={Math.random()}>
      <div className="date">{date}</div>
      {place ? (<div className="place">{place}</div>) : null}
      {title ? (<div className="title">{title}</div>) : null}
      <div className="description">{description}</div>
      {author ? (<div className="author">{author}</div>) : null}
      {publisher ? (<div className="publisher">{publisher}</div>) : null}
      {source ? (<div className="source">{source}</div>) : null}
      {url ? (<div className="url">{url}</div>) : null}
    </div>
  )
}

export default Factoid;