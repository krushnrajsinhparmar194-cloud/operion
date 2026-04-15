(function () {
  const training = window.dailyHoroscopeTrainingData;
  if (!training) return;

  const signRows = training.signs || [];
  const params = new URLSearchParams(window.location.search);
  const requestedName = params.get('name') || params.get('id') || training.agentProfile.name || 'Daily Horoscope Agent';

  const titleEl = document.getElementById('agentTitle');
  const subtitleEl = document.getElementById('agentSubtitle');
  const chatLog = document.getElementById('chatLog');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const profileStrip = document.getElementById('profileStrip');

  if (!chatLog || !chatInput || !sendBtn || !profileStrip) return;

  if (titleEl) titleEl.textContent = requestedName;
  if (subtitleEl) subtitleEl.textContent = training.agentProfile.subtitle;

  const state = {
    language: 'en',
    sign: null,
    birthDate: null,
    mode: 'focused'
  };

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function includesAny(text, words) {
    const source = text || '';
    return (words || []).some(function (word) {
      if (!word) return false;
      if (/[a-z]/i.test(word)) {
        return new RegExp('\\b' + escapeRegExp(word.toLowerCase()) + '\\b').test(source.toLowerCase());
      }
      return source.indexOf(word) !== -1;
    });
  }

  function addMessage(role, text) {
    const wrapper = document.createElement('div');
    wrapper.className = 'message ' + role;

    const label = document.createElement('div');
    label.className = 'message-label';
    label.textContent = role === 'user' ? 'You' : requestedName;

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;

    wrapper.appendChild(label);
    wrapper.appendChild(bubble);
    chatLog.appendChild(wrapper);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function renderProfile() {
    const chips = [];
    chips.push('Language: ' + (state.language === 'gu' ? 'Gujarati' : 'English'));
    chips.push('Mode: ' + state.mode.charAt(0).toUpperCase() + state.mode.slice(1));
    if (state.sign) chips.push('Sign: ' + state.sign);
    if (state.birthDate) chips.push('Birth date: ' + state.birthDate);
    profileStrip.innerHTML = chips.map(function (item) {
      return '<span class="chip">' + item + '</span>';
    }).join('');
  }

  function detectLanguage(text) {
    if (/[\u0A80-\u0AFF]/.test(text) || includesAny(text, training.intents.language.gu)) {
      state.language = 'gu';
      return;
    }

    if (includesAny(text, training.intents.language.en)) {
      state.language = 'en';
    }
  }

  function detectMode(text) {
    if (includesAny(text, training.intents.detail.full)) {
      state.mode = 'full';
      return;
    }

    if (includesAny(text, training.intents.detail.quick)) {
      state.mode = 'quick';
      return;
    }

    state.mode = 'focused';
  }

  function extractSign(text) {
    const lower = text.toLowerCase();

    for (let i = 0; i < signRows.length; i += 1) {
      const aliases = signRows[i].aliases || [];
      for (let j = 0; j < aliases.length; j += 1) {
        const alias = aliases[j];
        if (!alias) continue;

        if (/[a-z]/i.test(alias)) {
          if (new RegExp('\\b' + escapeRegExp(alias.toLowerCase()) + '\\b').test(lower)) {
            return signRows[i].sign;
          }
        } else if (text.indexOf(alias) !== -1) {
          return signRows[i].sign;
        }
      }
    }

    return null;
  }

  function extractBirthDate(text) {
    const isoMatch = text.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
    if (isoMatch) return isoMatch[0];

    const slashMatch = text.match(/\b(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})\b/);
    if (slashMatch) {
      const dd = slashMatch[1].padStart(2, '0');
      const mm = slashMatch[2].padStart(2, '0');
      const yyyy = slashMatch[3];
      return yyyy + '-' + mm + '-' + dd;
    }

    return null;
  }

  function signFromBirthDate(isoDate) {
    const date = new Date(isoDate + 'T00:00:00');
    if (Number.isNaN(date.getTime())) return null;

    const month = date.getMonth() + 1;
    const day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    return 'Pisces';
  }

  function detectTopic(text) {
    const topicMap = training.intents.topics || {};
    const keys = Object.keys(topicMap);

    for (let i = 0; i < keys.length; i += 1) {
      if (includesAny(text, topicMap[keys[i]])) {
        return keys[i];
      }
    }

    return 'full';
  }

  function wantsComparison(text) {
    return includesAny(text, training.intents.compare || []);
  }

  function currentRow() {
    for (let i = 0; i < signRows.length; i += 1) {
      if (signRows[i].sign === state.sign) return signRows[i];
    }
    return null;
  }

  function askForSign() {
    return state.language === 'gu' ? training.followUps.gu : training.followUps.en;
  }

  function buildLuckyEn(row) {
    return 'Lucky color: ' + row.luckyColor + '. Lucky number: ' + row.luckyNumber + '. Lucky direction: ' + row.luckyDirection + '. Best time: ' + row.luckyTime + '. Energy: ' + row.energyScore + '/5. Day tag: ' + row.dayTag + '.';
  }

  function buildLuckyGu(row) {
    return 'લકી રંગ ' + row.luckyColor + ', લકી નંબર ' + row.luckyNumber + ', લકી દિશા ' + row.luckyDirection + ', અને સારો સમય ' + row.luckyTime + '. Energy score ' + row.energyScore + '/5 છે અને day tag ' + row.dayTag + ' છે.';
  }

  function buildEnglish(row, topic, message) {
    const lucky = buildLuckyEn(row);
    const comparisonNote = wantsComparison(message)
      ? '\n\nNote: yesterday comparison data is not attached in this demo yet, so I am reading only today\'s profile.'
      : '';

    if (state.mode === 'quick') {
      if (topic === 'love') return row.sign + ': ' + row.loveEn + '\nAction: ' + row.actionEn + comparisonNote;
      if (topic === 'career') return row.sign + ': ' + row.careerEn + '\nMoney: ' + row.moneyEn + comparisonNote;
      if (topic === 'money') return row.sign + ': ' + row.moneyEn + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'health') return row.sign + ': ' + row.healthEn + '\nCaution: ' + row.cautionEn + comparisonNote;
      if (topic === 'spiritual') return row.sign + ': ' + row.spiritualEn + '\nAffirmation: ' + row.affirmationEn + comparisonNote;
      if (topic === 'lucky') return row.sign + ': ' + lucky + comparisonNote;
      return row.sign + ': ' + row.overviewEn + '\nAction: ' + row.actionEn + '\nLucky: ' + lucky + comparisonNote;
    }

    if (state.mode === 'focused') {
      if (topic === 'love') return row.sign + ' love reading:\n\nLove: ' + row.loveEn + '\nOverview: ' + row.overviewEn + '\nAction: ' + row.actionEn + '\nCaution: ' + row.cautionEn + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'career') return row.sign + ' career reading:\n\nCareer: ' + row.careerEn + '\nMoney: ' + row.moneyEn + '\nAction: ' + row.actionEn + '\nCaution: ' + row.cautionEn + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'money') return row.sign + ' money reading:\n\nMoney: ' + row.moneyEn + '\nCareer: ' + row.careerEn + '\nAction: ' + row.actionEn + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'health') return row.sign + ' health reading:\n\nHealth: ' + row.healthEn + '\nSpiritual: ' + row.spiritualEn + '\nAction: ' + row.actionEn + '\nCaution: ' + row.cautionEn + comparisonNote;
      if (topic === 'spiritual') return row.sign + ' spiritual reading:\n\nSpiritual: ' + row.spiritualEn + '\nOverview: ' + row.overviewEn + '\nAffirmation: ' + row.affirmationEn + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'lucky') return row.sign + ' lucky cues:\n\n' + lucky + '\nAction: ' + row.actionEn + comparisonNote;
    }

    return [
      'Today for ' + row.sign + ':',
      'Overview: ' + row.overviewEn,
      'Love: ' + row.loveEn,
      'Career: ' + row.careerEn,
      'Money: ' + row.moneyEn,
      'Health: ' + row.healthEn,
      'Spiritual: ' + row.spiritualEn,
      'Action step: ' + row.actionEn,
      'Caution: ' + row.cautionEn,
      'Lucky cues: ' + lucky,
      'Affirmation: ' + row.affirmationEn
    ].join('\n') + comparisonNote;
  }

  function buildGujarati(row, topic, message) {
    const lucky = buildLuckyGu(row);
    const comparisonNote = wantsComparison(message)
      ? '\n\nનોંધ: ગઈકાલનું comparison data આ demo માં attach નથી, એટલે હું આજે માટેની profile પરથી reading આપું છું.'
      : '';

    if (state.mode === 'quick') {
      if (topic === 'love') return row.sign + ': ' + row.loveGu + '\nAction: ' + row.actionGu + comparisonNote;
      if (topic === 'career') return row.sign + ': ' + row.careerGu + '\nMoney: ' + row.moneyGu + comparisonNote;
      if (topic === 'money') return row.sign + ': ' + row.moneyGu + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'health') return row.sign + ': ' + row.healthGu + '\nCaution: ' + row.cautionGu + comparisonNote;
      if (topic === 'spiritual') return row.sign + ': ' + row.spiritualGu + '\nAffirmation: ' + row.affirmationGu + comparisonNote;
      if (topic === 'lucky') return row.sign + ': ' + lucky + comparisonNote;
      return row.sign + ': ' + row.overviewGu + '\nAction: ' + row.actionGu + '\nLucky: ' + lucky + comparisonNote;
    }

    if (state.mode === 'focused') {
      if (topic === 'love') return row.sign + ' love reading:\n\nપ્રેમ: ' + row.loveGu + '\nOverview: ' + row.overviewGu + '\nAction: ' + row.actionGu + '\nCaution: ' + row.cautionGu + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'career') return row.sign + ' career reading:\n\nકેરિયર: ' + row.careerGu + '\nMoney: ' + row.moneyGu + '\nAction: ' + row.actionGu + '\nCaution: ' + row.cautionGu + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'money') return row.sign + ' money reading:\n\nપૈસા: ' + row.moneyGu + '\nકેરિયર: ' + row.careerGu + '\nAction: ' + row.actionGu + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'health') return row.sign + ' health reading:\n\nઆરોગ્ય: ' + row.healthGu + '\nSpiritual: ' + row.spiritualGu + '\nAction: ' + row.actionGu + '\nCaution: ' + row.cautionGu + comparisonNote;
      if (topic === 'spiritual') return row.sign + ' spiritual reading:\n\nઆત્મિક દિશા: ' + row.spiritualGu + '\nOverview: ' + row.overviewGu + '\nAffirmation: ' + row.affirmationGu + '\nLucky: ' + lucky + comparisonNote;
      if (topic === 'lucky') return row.sign + ' lucky cues:\n\n' + lucky + '\nAction: ' + row.actionGu + comparisonNote;
    }

    return [
      'આજે ' + row.sign + ' માટે full reading:',
      'Overview: ' + row.overviewGu,
      'પ્રેમ: ' + row.loveGu,
      'કેરિયર: ' + row.careerGu,
      'પૈસા: ' + row.moneyGu,
      'આરોગ્ય: ' + row.healthGu,
      'આત્મિક દિશા: ' + row.spiritualGu,
      'Action step: ' + row.actionGu,
      'Caution: ' + row.cautionGu,
      'Lucky cues: ' + lucky,
      'Affirmation: ' + row.affirmationGu
    ].join('\n') + comparisonNote;
  }

  function updateState(text) {
    detectLanguage(text);
    detectMode(text);

    const sign = extractSign(text);
    if (sign) state.sign = sign;

    const birthDate = extractBirthDate(text);
    if (birthDate) {
      state.birthDate = birthDate;
      state.sign = signFromBirthDate(birthDate);
    }

    renderProfile();
  }

  function buildReply(text) {
    const row = currentRow();
    if (!row) return askForSign();

    const topic = detectTopic(text);
    return state.language === 'gu'
      ? buildGujarati(row, topic, text)
      : buildEnglish(row, topic, text);
  }

  function submitMessage(text) {
    const message = text.trim();
    if (!message) return;

    addMessage('user', message);
    updateState(message);
    addMessage('agent', buildReply(message));
    chatInput.value = '';
  }

  sendBtn.addEventListener('click', function () {
    submitMessage(chatInput.value);
  });

  chatInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      submitMessage(chatInput.value);
    }
  });

  document.querySelectorAll('[data-prompt]').forEach(function (button) {
    button.addEventListener('click', function () {
      submitMessage(button.getAttribute('data-prompt'));
    });
  });

  renderProfile();
  addMessage('agent', 'Hi, I am ready. Send me your sign, rashi name, or birth date, and I will reply with a deeper horoscope reading.');
}());
