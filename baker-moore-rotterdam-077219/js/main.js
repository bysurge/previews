// Baker & Moore preview. Prijzen gecontroleerd tegen Menukaart 2025 (food + drinks pdf).
(function () {
  const eur = n => n.toFixed(2).replace('.', ',');
  const tags = t => (t || []).map(x => `<span class="tag">${x}</span>`).join('');

  // ---------- Menukaart ----------
  // item: [naam, prijs (getal of tekst), omschrijving, tags, extra]
  const MENU = {
    ontbijt: {
      intro: 'De hele dag, zeven dagen per week.',
      groups: [{ items: [
        ['Luxury Breakfast Shelf', '18,50 p.p.', 'Voor 2 personen (of meer). Rustic (sourdough) breads, homemade cinnamon bread with lemon cream, pistachio croissants, boiled farm eggs, deluxe ham & cheese, avocado, mini yogurt bowl with granola, homemade jam, butter and fresh orange juice. Vega optie mogelijk.', [], 'Add ons: crispy bacon 3,50 · vegan bacon 3,50 · flamed salmon 4,50 · burrata (125 gr) 5,50 · add mimosa +9,00'],
        ['Toast Avo Mash', 15.5, 'Spelt toast, creamy avocado mash, asparagus, roasted cherry tomatoes, za\'atar oil, pickled radish, dill.', ['V'], 'Add your protein: flamed salmon 4,50 · crispy bacon 3,50 · vegan bacon 3,50'],
        ['Yogurt Slowjuice Bowl', 12.9, 'Organic yogurt, fresh slow juice, homemade peach compote, banana, red fruits & homemade granola.', ['V'], 'Vegan coconut yogurt +1,00'],
        ['Breakfast Platter', 16.9, 'Voor 1 persoon. Spelt toast avocado mash with asparagus, roasted cherry tomatoes & za\'atar oil · organic yogurt with homemade peach compote & granola · homemade cinnamon bread with lemon cream.', ['V']],
        ['Summer Açaí Bowl', 13.9, 'Açaí berries, mango, pineapple, homemade granola, chia seeds, hemp seeds.', ['VG']],
        ['Kids Menu', 8.9, 'Fresh croissant with homemade jam & a slice of bread with Nutella or peanut butter. Served with fresh orange juice, lemonade or organic apple juice.', ['V']]
      ] }]
    },
    sandwich: {
      intro: 'Onze bestsellers. Of maak je eigen bourgondische (grilled) sandwich bij Create it yourself.',
      groups: [{ items: [
        ['Mr Baker goes Asia', 15.9, 'Avocado-nori mash, little gem, flamed salmon, pickled cauliflower, curry mayo, soya-sesame, tempura crunch.'],
        ['La Dolce Burrata', 16.5, 'Whole burrata (125 g), sun-dried tomato pesto, mortadella, vinegar peach compote, pistachio crunch, rocket salad.'],
        ['The Grilled Baker', 14.9, 'Old Dutch cheese, crispy bacon, truffle mayo, rocket salad, avocado, pine nuts.'],
        ['Tokyo Crunch', 15.9, 'Pulled chicken, red cabbage, ponzu mayonnaise, crispy bacon and shiso leaf.'],
        ['Share Platter', '19,90 p.p.', 'Voor 2 personen. Een bourgondische plank met alle vier de bestsellers hierboven.']
      ] }]
    },
    salad: {
      groups: [
        { title: 'Salad special', items: [
          ['Golden Couscous Bowl', 16.5, 'Couscous, roasted eggplant, peach compote, avocado, cucumber, roasted cherry tomatoes.', [], 'Add your protein: flamed salmon 4,50 · crispy bacon 3,50 · burrata (125 gr) 5,50 · chicken 3,50 · bread & butter +3,00']
        ] },
        { title: 'Vegan options', items: [
          ['Green Harmony', 13.9, 'Homemade basil hummus, slow-cooked eggplant, miso sauce, buckwheat crunch.', ['VG'], 'Add on: vegan bacon 3,50'],
          ['Famous Vegan Grilled Baker', 14.9, 'Vegan cheddar, crispy vegan bacon, truffle mayo, avocado, rocket salad, pine nuts.', ['VG']],
          ['Vegan Share Platter', '19,50 p.p.', 'Voor 2 personen. Een vegan plank met de sandwiches hierboven om te delen.']
        ] }
      ]
    },
    zoet: {
      groups: [{ items: [
        ['Daily fresh sweets', '', 'Check de koelkast naast de trap voor de specials van vandaag: een wisselende selectie vegan en glutenvrij gebak, en klassieke cheesecakes en carrot cakes van Koekela Bakery, SUE en Rose & Vanilla.', ['V', 'VG', 'GF']],
        ['Homemade Sweet Creations', 8.5, 'Fresh croissant, homemade cinnamon bread, lemon cream & homemade jam.'],
        ['Healthy High Tea', 29.95, '100% suikervrij, glutenvrij, lactosevrij & vegan. Reserveren aan de bar of online.', [], '<a href="#hightea">Meer over de high tea</a>']
      ] }]
    },
    koffie: {
      groups: [
        { title: 'Coffee specialties', cols: ['small', 'normal'], items: [
          ['Coffee', [3.9, 4.9]], ['Americano', [3.9]], ['Cortado', [3.9]], ['Espresso', [3.9, 4.9]],
          ['Espresso macchiato', [3.9]], ['Cappuccino', [3.95, 4.95]], ['Cococchino', [4.5, 5.5]], ['Babychino', [2.9]],
          ['Flat white', [null, 4.95]], ['Latte / latte macchiato', [3.95, 4.95]], ['Matcha latte', [4.5, 5.5]],
          ['Chai latte / iced chai latte / dirty chai (+1,50)', [4.5, 5.5]], ['Hot chocolate milk (vegan milk +0,50)', [4.5, 5.5]],
          ['Iced coffee', [null, 5.3]], ['Coffee without coffee', [null, 5.9], 'Cacao, maca en een blend van lion\'s mane, cordyceps en reishi.']
        ] },
        { title: 'Add ons', items: [
          ['Milk: almond, coconut of Oatly (all vegan)', 0.7, '', ['VG']], ['Extra shot espresso', 1], ['Syrups: hazelnut, vanilla, caramel', 0.5]
        ] },
        { title: 'Fresh tea specials', items: [
          ['Create it yourself: kies zoveel als je wilt', 3.9, 'Flavours ginger, lemon, mint, orange, cinnamon: 0,50 each.']
        ] },
        { title: 'Organic tea', note: 'Zonder toevoegingen en kunstmatige kleurstoffen; sommige thee kleurt daardoor minder dan andere.', items: [
          ['Earl Grey', 3.9, 'black tea'], ['English Breakfast', 3.9, 'black tea'], ['Sencha Lemon', 3.9, 'green tea'],
          ['Sencha Cactus Fig', 3.9, 'green tea'], ['Green Chai', 3.9, 'green tea'], ['Phoenix Dragon Jasmin Pearls', 3.9, 'green tea'],
          ['Rooibos', 3.9, 'herbal tea']
        ] },
        { title: 'Herbal specialteas', items: [
          ['Verveine', 3.9, 'calming, lemon scent'], ['Chamomile', 3.9, 'relaxing, mildly floral'],
          ['Tulsi Orange Ginger', 3.9, 'relaxing, a touch of orange, lemongrass, ginger'], ['Sencha Aloe Vera', 3.9, 'complex, a touch of pineapple'],
          ['Rose tea', 3.9, 'aromatic, a touch of rose']
        ] }
      ]
    },
    drank: {
      groups: [
        { title: 'Healthy slowjuices', items: [
          ['Fresh orange juice', 6.9], ['Red', 6.9, 'Apple, pineapple, beetroot, ginger, lemon'], ['Orange', 6.9, 'Carrot, orange, apple, lime']
        ] },
        { title: 'Elixer shots', items: [
          ['The Heart Opener', 3.9, '100% pure cacao shot'], ['Fresh ginger shot', 3.9, 'Ginger, apple, cayenne, lemon']
        ] },
        { title: 'Homemade drinks', items: [
          ['Homemade ginger beer', 5.7, 'Served with fresh lemon, orange, ice'],
          ['Iced elderflower & green tea', 5.7, 'Organic green tea, elderflower, agave, fresh mint, lime, ice']
        ] },
        { title: 'Sodas', cols: ['small', 'large'], items: [
          ['Marie Stella Maris sparkling water', [3.5, 7.0]], ['Marie Stella Maris still water', [3.5, 7.0]],
          ['Coca-Cola, Zero, organic apple juice', 3.8]
        ] },
        { title: 'Alcohol', cols: ['klein flesje', 'grote fles'], items: [
          ['Local Brewery Noordt', 5.5, 'Noordsingel, Wit, Blondt, IPA, Season'],
          ['Wine: white / rosé / red', [7.5, 23]], ['Prosecco', [8.0, 27]],
          ['Mimosa', 9.0, 'Fresh orange juice, small bottle prosecco']
        ] }
      ]
    }
  };

  const priceCell = (p, cols) => {
    if (Array.isArray(p)) {
      return `<span class="pr pr-cols">${(cols || []).map((c, i) => `<span>${p[i] != null ? eur(p[i]) : ''}</span>`).join('')}</span>`;
    }
    if (p === '' || p == null) return '<span class="pr"></span>';
    return `<span class="pr">${typeof p === 'number' ? eur(p) : p}</span>`;
  };

  const panels = document.getElementById('panels');
  Object.entries(MENU).forEach(([key, sec], idx) => {
    let html = sec.intro ? `<p class="panel-intro">${sec.intro}</p>` : '';
    html += '<div class="groups' + (sec.groups.length === 1 ? ' single' : '') + '">';
    sec.groups.forEach(g => {
      html += '<div class="group">';
      if (g.title) {
        html += `<div class="g-head"><h3>${g.title}</h3>${g.cols ? `<span class="pr-cols g-cols">${g.cols.map(c => `<span>${c}</span>`).join('')}</span>` : ''}</div>`;
      }
      if (g.note) html += `<p class="g-note">${g.note}</p>`;
      html += '<ul class="items">';
      g.items.forEach(([name, price, desc, t, extra]) => {
        html += `<li><div class="it-line"><span class="it-name">${name} ${tags(t)}</span><span class="dots" aria-hidden="true"></span>${priceCell(price, g.cols)}</div>`;
        if (desc) html += `<p class="it-desc">${desc}</p>`;
        if (extra) html += `<p class="it-extra">${extra}</p>`;
        html += '</li>';
      });
      html += '</ul></div>';
    });
    html += '</div>';
    const el = document.createElement('div');
    el.className = 'panel'; el.id = 'p-' + key; el.setAttribute('role', 'tabpanel');
    el.setAttribute('aria-labelledby', 't-' + key); el.tabIndex = 0;
    if (idx) el.hidden = true;
    el.innerHTML = html;
    panels.appendChild(el);
  });

  const tabs = [...document.querySelectorAll('[role=tab]')];
  const select = tab => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus();
    });
  });

  // ---------- Create it yourself ----------
  const STEPS = [
    { title: 'Stap 1', sub: 'Kies je brood of salade', type: 'radio', name: 'basis', items: [
      ['Whole wheat bread', 4], ['100% spelt wheat (organic & sourdough)', 4], ['Salad (bowl)', 6], ['Couscous (bowl)', 5]
    ] },
    { title: 'Your base', sub: 'Homemade', type: 'checkbox', items: [
      ['Organic Dutch cheese', 3], ['Fresh burrata (125 gr)', 5.5], ['Aged Dutch cheese', 3], ['Mortadella ham', 3.5],
      ['Serrano ham', 3.5], ['Crispy bacon', 3.5], ['Pulled chicken', 3.5], ['Smoked salmon (flamed)', 4.5], ['Boiled egg (1 piece)', 1.5]
    ] },
    { title: 'Vegan toppings & veggies', sub: 'Allemaal vegan en glutenvrij', type: 'checkbox', items: [
      ['Avocado', 2], ['Vegan bacon', 3.5], ['Vegan cheddar', 3.5], ['Homemade basil hummus', 2.5], ['Roasted cherry tomatoes', 2],
      ['Grilled asparagus', 2.5], ['Red cabbage', 2.5], ['Homemade peach compote', 2.5], ['Slow cooked eggplant', 2.5], ['Red seasonal fruits', 2.5]
    ] },
    { title: 'Toppings', sub: '0,70 per stuk, vegan en glutenvrij', type: 'checkbox', small: true, items: [
      ['Cucumber', 0.7], ['(Cherry) tomato', 0.7], ['Salad', 0.7], ['Tempura crunch', 0.7], ['Pickles', 0.7], ['Capers', 0.7],
      ['Pickled onion', 0.7], ['Pickled cauliflower', 0.7], ['Walnuts', 0.7], ['Pine nuts', 0.7], ['Dukkah', 0.7], ['(Smoked) almonds', 0.7]
    ] },
    { title: 'Stap 2', sub: 'Kies je saus of dressing, allemaal vegan en glutenvrij', type: 'checkbox', items: [
      ['Mayonaise of truffle mayonaise', 0.7], ['Miso dressing', 0.7], ['Sun-dried tomato pesto', 0.7],
      ['Soya / sesame dressing', 0.7], ['Ponzu mayonaise', 0.7], ['Curry mayonaise', 0.7]
    ] }
  ];
  const steps = document.getElementById('steps');
  let n = 0;
  steps.innerHTML = STEPS.map(s => `
    <fieldset class="step${s.small ? ' step-chips' : ''}">
      <legend><span class="step-t">${s.title}</span><span class="step-s">${s.sub}</span></legend>
      <div class="opts">${s.items.map(([name, p]) => {
        const id = 'o' + (n++);
        return `<label class="opt" for="${id}"><input type="${s.type}" id="${id}" name="${s.name || id}" value="${p}" data-n="${name}"><span class="opt-n">${name}</span>${s.small ? '' : `<span class="opt-p">${eur(p)}</span>`}</label>`;
      }).join('')}</div>
    </fieldset>`).join('');

  const form = document.getElementById('builder');
  const sum = document.getElementById('sum');
  const list = document.getElementById('sumList');
  const update = () => {
    const on = [...form.querySelectorAll('input:checked')];
    const total = on.reduce((a, i) => a + Number(i.value), 0);
    sum.textContent = '€ ' + eur(total);
    list.textContent = on.length ? on.map(i => i.dataset.n).join(', ') : 'Begin met stap 1: brood of salade.';
  };
  form.addEventListener('change', update);
  form.addEventListener('reset', () => setTimeout(update, 0));

  // ---------- Hero foto's ----------
  const imgs = [...document.querySelectorAll('.hero-photos img')];
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!still && imgs.length > 1) {
    let i = 0;
    setInterval(() => {
      imgs[i].classList.remove('is-on');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('is-on');
    }, 6000);
  }

  // ---------- Mobiel menu ----------
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open);
    document.body.classList.toggle('nav-open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open');
  }));

  // ---------- Voorbeeldformulieren ----------
  document.querySelectorAll('form[data-demo]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const m = f.querySelector('.demo-msg'); if (m) m.hidden = false;
  }));
})();
