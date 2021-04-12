import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import AccountTabs from './Containers/AccountTabs';
import HorizontalMenu from './Containers/HorizontalMenu';
import Posts from './Pages/Public/Posts';

import axios from 'axios';
import utils from './Utils';

const url='http://localhost:4000/getProfile'

const a = {
  "profile": {
    "id": "35621488729",
    "name": "🏅Monetiza tu idea en Insta",
    "pic": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/160749207_1118035928708171_7198024186681508085_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_ohc=Qeh8iY198vwAX9LuIWL&edm=ABfd0MgAAAAA&ccb=7-4&oh=d78ec332123b483fc93f0beddbb54bf1&oe=60954649&_nc_sid=7bff83",
    "bio": "🙌🏻 Ayudo a coaches y emprendedores a crecer y vender sus servicios en instagram ↗️\n👩‍💻Elba\n🤝 Asesoría 1 a 1 al DM\n⤵️Descarga tu kit de Bienvenida ⤵️",
    "private": false,
    "access": true,
    "verified": false,
    "website": "https://instaescuela.com/recursos",
    "followers": 10924,
    "following": 44,
    "posts": 73,
    "lastPosts": [
      {
        "shortcode": "CNags0lD6TJ",
        "caption": "🤯El algoritmo NO es tu enemigo 🤯\n\n👉🏼Con este post quiero que conozcas ese robot que la mayoría le teme, pero que puede ser adorable si lo pones  a trabajar a tu favor.\n\n👉🏼Fuente del diagrama @ednegociosonline \n\n#emprendimientofemenino #estrategiasdehashtags #crecimientoorganico #tipsredessociales #venderenredes #coachesofinstagram",
        "comments": 19,
        "likes": 216,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/169916030_2229549493846942_888203319032328537_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=G0BtJ_Z6x4YAX8QQuVW&edm=ABfd0MgAAAAA&ccb=7-4&oh=8dff0521bc13796faecbe4deccd30e59&oe=6095C5A0&_nc_sid=7bff83",
        "timestamp": 1617904775
      },
      {
        "shortcode": "CNVRSIaL2sA",
        "caption": "📈📈 5 Estrategias para aumentar tus ventas online 😎\n\nSi tienes una Tienda Online y no recibes muchas visitas o no estás vendiendo como te gustaría quiero que chequees estas 👉 5 Estrategias para aumentar tus ventas online \nque Mica de @escuelaclick  ha compartido con nosotros.\n\nSe al igual que tu que no es suficiente con montar el negocio con todo el cariño del mundo y tener los productos mas cool, ese cariño también debe ir acompañado de una estrategias de Marketing.\n\n👋Desliza y conoce estas 5 estrategias con mas detalle.\n\nMe encantaría saber si ya estás aplicando una de ellas en los comentarios ⬇⬇⬇\n\n#ventasonline #ventasalmayorcolombia #emprendimiento #enviosatodoelpais #ventasonlinecolombia #ventasonlinepanama #ventasonlinevenezuela #ventasonlinebolivia #ventasmedellinonline #frasesdemarketing #remarketing #estratégiasdemarketingdigital #estrategiasdemarketingdigital #estrategiasdemarketingnaadvocacia #estrategiasdemarketingdigit #estrategiasdemarketingnotradicionales #tiendavirtual #mercadolibrevzla #mercadolibremedellin #mercadolibremoda #socialmediagency #ventascruzadas",
        "comments": 23,
        "likes": 151,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/169261556_737626263568359_39671486030358287_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=4QP5k9GMPPAAX8_KvBZ&edm=ABfd0MgAAAAA&ccb=7-4&oh=0076971545fe7c9e2ecd2550ead16df4&oe=6094E3DE&_nc_sid=7bff83",
        "timestamp": 1617728920
      },
      {
        "shortcode": "CNNkxpILyJJ",
        "caption": "🚨Emprendedora precavida vale por 1000, respalda tus fotos y videos🚨\n\n🙌🏼Desliza y guarda este paso a paso para que puedas respaldar toda la información de tu insta🚨\n\n👉🏼Después que completes el proceso y descargues tus datos verás que toda tu info llegará en un archivo en formato ZIP que debes descomprimir en tu computadora.\n\n✅Una vez lo descomprimas vas a poder ver una serie de carpetas clasificadas con tus:\n-Fotos\n-Videos\n-Stories\n\n✅Por último encontrarás archivos en formato json con una lista de las interacciones que has hecho 😱, como likes y comentarios.\n\nPara visualizar los archivos .json debes hacerlo con un visor de archivos json, por ejemplo jsonviewer, esto para que puedas ver el texto más legible.\n\nNo olvides compartir este post, y no le hagas este respaldo a la cuenta de tu espos@ 😆😆😆😆, un abrazo 🙌🏼\n\n#escueladeinsta #coacheinredessociales #estrategiasinternet #communitymanagerespana #aumentarventas #publicidadenfacebook #emprendefacil #seolocal #consultorbarcelona #estrategiadigitalbarcelona #presenciadigital #titularesparainstagram #coacheseninstagram #monetizatusredes #publicidadeninstagram",
        "comments": 45,
        "likes": 460,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/167958627_304512044350725_1795596510119119631_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ZQVpu6Ls2bsAX-tBwFQ&edm=ABfd0MgAAAAA&ccb=7-4&oh=715d487cd3da96467076d9e71f5f1c23&oe=609624EA&_nc_sid=7bff83",
        "timestamp": 1617470704
      },
      {
        "shortcode": "CNGLWY7L9xl",
        "caption": "Ayer @alodigitalmarketing compartió 6 herramientas para agregar subtítulos a videos y me inspiré en su publicación para recomendarte las 3 mejores de ellas.\n\n👉Captions for TikTok me parece la mas cool, sin embargo Veed también es super práctica (esta también me la recomendadó el profe  @jose_autismoytea  en una asesoría que tuvimos)\n\n🤫 Desliza y conoce las otras herramientas y conoce el nuevo stickers que viene para Instagram 📈📈📈\n\nConocías alguna de estas aplicaciones??? Te leooo 👇👇👇👇👇👇👇👇👇\n\n#escueladeinsta #coacheinredessociales #estrategiasinternet #communitymanagerespana #aumentarventas #publicidadenfacebook #emprendefacil #seolocal #consultorbarcelona #estrategiadigitalbarcelona #presenciadigital #titularesparainstagram #coacheseninstagram #monetizatusredes #publicidadeninstagram",
        "comments": 19,
        "likes": 245,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/166135807_464553891413081_8713130660981801326_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=UMfH5wpP4G0AX8Z35OH&edm=ABfd0MgAAAAA&ccb=7-4&oh=e94824ce26877f058f58b8a61e4d0095&oe=60943F22&_nc_sid=7bff83",
        "timestamp": 1617222493
      },
      {
        "shortcode": "CNAugpZrUaC",
        "caption": "🙆‍♀️No sabes que publicar 😌\n\n👉Yo también me he quedado sin ideas al momento de crear mis publicaciones, y cuando eso me pasa recurro a mis 3 herramientas favoritas para descubrir que están buscando las personas en internet sobre un tema en específico. (tu puedes hacerlo con temas de tu nicho)\n\n🙌Luego de investigar, tomo nota de las búsquedas más importante y comienzo a estructurar el guión, luego lo adapto a carrusel que es el formato que más uso (tu puedes usar el que más te guste).\n\nOtra manera de conocer que contenido crear, es usando el sticker.s de pregunta para consultarle a tu audiencia a través de tus historia.s que quiere ver en tu cuenta, esto es ideal para involucrarlos en tu proceso de creación.\n\n👋Desliza y luego me encantaría saber si conocías estas herramientas, Te leo en los comentarios ⬇️⬇️⬇️",
        "comments": 34,
        "likes": 300,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/166020289_489587595398038_2494393150545114305_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Dglf9_h87bIAX-TeLKh&edm=ABfd0MgAAAAA&ccb=7-4&oh=6821fe641c465cfe2f3aff9592fae981&oe=6097A6B0&_nc_sid=7bff83",
        "timestamp": 1617039600
      },
      {
        "shortcode": "CM5ERccpjSE",
        "caption": "📈 Quiero compartir contigo el camino para que vendas tus servicios en la red social que quieras.\n\nPrimero quiero decirte que no es insta, ni el algoritmo, tampoco necesitas tener miles de seguidorxs, ni un feed perfecto, lo único que necesitas es un contenido que valga la pena, que sea un imán que atraiga a los seguidores correctos.\n\n👋El segundo paso es ayudar, servir sin ningún interés y trabajar en la confianza.\n\nRecuerda: las personas que te comparán es porque confían en tí.\n\n👉Desliza y conoce como puedes lograrlo, y comparte éste posts en tus historias, quizas  tus amigos emprendedores lo necesitan leer.\n\nUn abrazo!! 😘\n\n#redessocialesecuador #marketingpromocional #agenciamarketingdigital\n#marketingpromocional #agenciamarketingdigital #emprendedorasvenezolanas #emprendimientosermamá #emprendedorescolombia #aumentarventas #communitymanagerespana #emprendefacil #presenciadigital  #coacheseninstagram #monetizatusredes #publicidadeninstagram\n #marketingpromocional #agenciamarketingdigital #emprendedorasvenezolanas #emprendimientosermamá #emprendedorescolombia",
        "comments": 22,
        "likes": 144,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/164348439_1127653501084965_6017551965634210854_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=pEWtg_Nc-EcAX-mM0dz&edm=ABfd0MgAAAAA&ccb=7-4&oh=aa80fb892ca020aa50ac9b9fe0bcb44f&oe=6097589A&_nc_sid=7bff83",
        "timestamp": 1616782575
      },
      {
        "shortcode": "CMu7FfBB339",
        "caption": "👉🏻Uno de los errores que cometen los emprendedores al subir sus publicaciones es no crear un Titular que dispare la curiosidad de sus seguidores.\n\n👉🏻Tenemos muy pocos segundos para lograr que una persona deje de deslizar y se detenga a leer lo que queremos compartir.\n⁣\n👉🏻El titular es parte de la fórmula de un post ganador, la verdad es que puedes publicar un super reel o carrusel, pero sin un buen titular es muy poco probable que alguien se detenga a leerlo.\n\n🔬Los estudios son muy claros: 8 de cada 10 usuarios leen el título de tus publicaciones pero en promedio 2 de cada 10 se detiene a leerlo.⁣\n⁣\n\n➡Por eso es importante que escribas titulares llamativos para que logres captar la atención del usuario.⁣\n⁣\n🏆Desliza y descubre 3 fórmulas para comiences YA a crear titulares llamativos.\n⁣\n👉Practiquemos: Me gustaría que dejes un ejemplo de un titular con una de éstas fórmulas pero relacionado con tu nicho en instagram.\n⁣\n➡Gracias por formar parte de la comunidad @instaescuela, un abrazo y sigamos creciendo juntos en Instagram!\n\n#emprendimientodigital #neuroventas #emprendetransforma\n#vendermas #paraemprendedoras #ideasdenegocio #coacheseninstagram\n#emprendedurisimo  #estrategiasdecontenido \n#monetizatusredes #instagramparacoaches #publicidadymarketing #publicidadeninstagram #presenciadigital #socialmediaexperts #socialmediamanagement #estrategiadigital #estrategiadigitalbarcelona #consultorbarcelona #coachbarcelona #algoritmo #titularesparainstagram",
        "comments": 31,
        "likes": 314,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/163850179_2785536165020322_7665313955551066369_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=qq2yfgPA-f0AX8a12WF&edm=ABfd0MgAAAAA&ccb=7-4&oh=b4228e882d86aa645b9b9637b3f88b30&oe=6096B228&_nc_sid=7bff83",
        "timestamp": 1616442214
      },
      {
        "shortcode": "CMnd40epxG3",
        "caption": "👉Cómo aplicar los colores de tu marca a tus diseños de Canva.\n\nLevanta la mano si eres canvalover! 🙂\n\n➡️Canva me ha permitido diseñar los posts super rápido, a diferencia de otros programas que son nivel diseñador, en donde no lo lograba 😆.\n\n➡️Hoy quiero mostrate como puedes aplicar los colores de marca en tus diseños, y cómo puedes guardarlo en tu kit de marca si usas canva PRO.\n\n👉Si usas la versión FREE te recomiendo que tengas los colores en un block de notas donde puedas acceder a ellos más rápido.\n\n👉Y tú, Que otros trucos de Canva te gustaría aprender?\n\n🙌Me encantaría saber, y gracias por ser parte del Team @instaescuela\n\n👇\n#canvatrucos #teamcanva #canvafacil #estrategiadigital #emprendimientodigital #diseñografico #diseñodigital #crecimientoprofesional #contenidosdigitales #contenidodigital #communitymanagers #canva #canvalover #instatips #emprendedoraonline #diseñodigital #tipdiseño #diseñografico #identidadvisual",
        "comments": 19,
        "likes": 332,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/162500580_191900105737787_1139883736979090049_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Q8x73sQi4EQAX8XQhkC&edm=ABfd0MgAAAAA&ccb=7-4&oh=8dadc8c25698bb4767db09efaf4aa5b2&oe=6096C183&_nc_sid=7bff83",
        "timestamp": 1616192025
      },
      {
        "shortcode": "CMiNA2RDzt5",
        "caption": "🤯Cómo gané 4400 seguidores con el botón prohibido (con la mínima inversion)\n\nEstá pregunta no falla en mis asesorías ➡️\n\n🤔Es verdad que si uso el botón azul pierdo dinero? Y mí respuesta es Depende de lo que quieras y le enseño el paso a paso de la estrategia que me ha funcionado.\n\n🤔Está pregunta es muy común, y es  que a diario vemos como muchas personas repiten lo mismo.\n\n🚫No uses el botón promocionar\n🚫Ni se te ocurra usar el botón azul\n🚫Está prohibido mejor es el administrador de Facebook.\n\nY quedó así 🤯 cuando veo que las personas que lo prohíben lo usan.\n\n➡️Cómo me doy cuenta? Cuando veo un anuncio que dice Ir al perfil de instagram. (Esto se logra solo con el botón azul que todos prohíben 😂)\n\n➡️Si bien es cierto que el botón azul tiene una segmentación y estructura limitada eso no quiere decir que no funcione.\n\n❤️El botón azul (para mí es la mejor) cuando tu objetivo es conseguir seguidores y darle visibilidad a tu perfil de instagram.\n\n🤔Por qué Elba?\n\n➡️Porque el botón promocionar es del único que te da la opción de Ir al perfil de instagram.\n\n➡️Desde el administrador no está esa opción y cuando haces click en el anuncio se va a una página que emula tu perfil (es decir no va a tu perfil en la misma app de instagram) por lo que esto no es tan óptimo. \n\nLa verdad es que si tu objetivo es conseguir seguidores en instagram y que conozcan tu marca puedes úsalo, eso si: con estrategia.\n\n✅No uses tantos intereses\n✅Prueba con el presupuesto mínimo \n✅Cuando consigas el interés de oro ESCALA\n✅Usa los datos demográficos (avatar)\n✅Optimiza tu perfil\n\n➡️Ahora si tu objetivo es hacer remarketing: Por ej.: quieres mostrar públicidad a las personas que visitaron tu perfil o página web, ahí si te conviene usar el Administrador de Facebook ya que esto no se puede desde el botón azul.\n\n🤝De ahora en adelante cuando escuches \"El botón prohibido\" envíale este post!  Y dile DEPENDE.\n\n💥Y cuando leas algo en redes sociales no te dejes llevar, realiza pruebas y ve que te funciona más.\n\n🤔Comparte este posts a un amigo, el botón azul estará agradecido.\n\n➡️ Me gustaría conocer tu opinión en los comentarios.\n\n#facebokads #botonpromocionar #publicidadenredes",
        "comments": 67,
        "likes": 241,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/e35/162561661_438844497176235_9016299711525743594_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=VetGauB2HLEAX8Zjy43&edm=ABfd0MgAAAAA&ccb=7-4&oh=3864a6d25589f93ee1f28ebf518f331f&oe=6095C4B6&_nc_sid=7bff83",
        "timestamp": 1616015405
      },
      {
        "shortcode": "CMafDQUDzea",
        "caption": "🤯No cometas estos errores 🤯\n\n➡️Acá, te comparto los 6 errores más frecuentes que comenten los emprendedores en su cuenta de negocios en insta.\n\n👉🏼Desliza y si tienes alguna duda envíame un DM.\n\n#marketingdecontenidos #comunitymanager #tipsredessociales",
        "comments": 15,
        "likes": 173,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/e35/160608150_469396977581248_8981771629502475649_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ESBtJrh0E4gAX_PTMYk&edm=ABfd0MgAAAAA&ccb=7-4&oh=4fa5b9992c4a54bd527e8851a7a9a996&oe=6096F1AC&_nc_sid=7bff83",
        "timestamp": 1615756427
      },
      {
        "shortcode": "CMXfu1FD0CO",
        "caption": "💥7 herramientas para sacarle el jugo a Insta.\n\n Sígueme para más tips @instaescuela\n\n#tipsredessciales #vendeenredessociales #redessocialesparanegocios",
        "comments": 23,
        "likes": 547,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/e35/159811425_902250467274764_821430234678701424_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=uaFeeZSIvg0AX-V1oyi&edm=ABfd0MgAAAAA&ccb=7-4&oh=ba6a9ebae0cd5d7c0a011b6c7f2f1fa8&oe=6095920D&_nc_sid=7bff83",
        "timestamp": 1615656120
      },
      {
        "shortcode": "CMPvZDYDjTp",
        "caption": "🙌🏻Lo que me hubiera gustado que me dijeran hace 10 años 🤯\n\n👉🏼Desliza y conoce las características que te harán progresar en tu negocio online.\n\n💬Me encantaría saber tu opinión.\n\n#emprendersepuede\n#vendeenredessociales #emprendedorasdigitales #infoproductoresdigitales #infoproductos",
        "comments": 20,
        "likes": 204,
        "thumbnail": "https://instagram.fbga3-1.fna.fbcdn.net/v/t51.2885-15/e35/158450855_260158289157001_2963348738362108596_n.jpg?tp=1&_nc_ht=instagram.fbga3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=erbfv4a11SIAX-qJ6dU&edm=ABfd0MgAAAAA&ccb=7-4&oh=07f820fccb07091713dc7578fd8c2c12&oe=60959C67&_nc_sid=7bff83",
        "timestamp": 1615395895
      }
    ],
    "link": "https://www.instagram.com/instaescuela"
  }
};

function App() {

  const [state, setState] = useState({
    accounts:[]
  })

  useEffect(()=>{/*
    axios({
      method: "POST",
      url: url,
      data: {username:"instaescuela"},
    })
    .then(data => {
      console.log(data.data);
      if(!data.data.error){
        let aux = state.accounts;
        aux.push(data.data.profile);
        setState({...state, accounts:aux})
        console.log(utils.getHashtagFromPost(data.data.profile.lastPosts))
      }
    })
    .catch((error)=>console.error(error));
    axios({
      method: "POST",
      url: url,
      data: {username:"maicol604"},
    })
    .then(data => {
      console.log(data.data);
      if(!data.data.error){
        let aux = state.accounts;
        aux.push(data.data.profile);
        setState({...state, accounts:aux})
        console.log(utils.getHashtagFromPost(data.data.profile.lastPosts))
      }
    })
    .catch((error)=>console.error(error));*/
    axios({
      method: "GET",
      url: 'http://localhost:4000/test',
      //data: {username:"instaescuela"},
    })
    .then(data => {
      console.log(data.data);
      /*if(!data.data.error){
        let aux = state.accounts;
        aux.push(data.data.profile);
        setState({...state, accounts:aux})
        console.log(utils.getHashtagFromPost(data.data.profile.lastPosts))
      }*/
    })
    .catch((error)=>console.error(error));
    fetch('https://graph.facebook.com/v10.0/17841435541882686?_activeScenarioIDs=[]&_activeScenarios=[]&fields=business_discovery.username(instaescuela){profile_picture_url,username,followers_count,media_count,media{comments_count,caption,like_count,media_type,media_ur,media_product_type,timestamp}}&transport=cors&access_token=EAAE7S1ZCabhABAHx3HrTruZBwdoLMN4gkweyvSbuNzCSecgC5HwxxVTmZAiRh4wGwi3ZC1cwQ09Y0CLaqwtNk6GvhZCeqaEY2WKvgsOaZB6esnxgBgiwNo2TQxEgZBVf3jvdXT1iEZAvs5p5e2nLTJ7XqRBG3ZBnFVZCJwYkaCCkHUcAZDZD')
    .then(resp=>resp.json())
    .then(data => {
      console.log(data);
      if(!data.error){
        let aux = state.accounts;
        aux.push(data.business_discovery);
        setState({...state, accounts:aux})
        //console.log(utils.getHashtagFromPost(data.data.profile.lastPosts))
      }
    })
    .catch((error)=>console.error(error));
  },[]);

  return (
    <div className='App'>
      <Router>
        <AccountTabs
          accounts={state.accounts}
        />
        <HorizontalMenu/>
        <Posts posts={[]}/>
      </Router>
    </div>
  );
}

export default App;
