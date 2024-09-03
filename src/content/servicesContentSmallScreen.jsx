/* eslint-disable no-irregular-whitespace */
import ServicesList from "../components/ServicesList";

import {
  polishingImage,
  repairImage,
  diagnosticsImage,
  electric,
  transmission,
  welding,
  conditioner,
  dents,
  oil,
  tireWorks,
  tuning,
  parts,
  paint,
  disk,
} from "../assets";

const smallScreenServicesArray = [
  {
    titleRus: "Полировка автомобиля",
    titleEst: "Auto poleerimine",
    titleFin: "Auton kiillotus",
    descriptionRus:
      "Эффективные методы полировки и защиты автомобиля: восстановление блеска и защита кузова от внешних факторов",
    descriptionEst:
      "Tõhusad meetodid auto poleerimiseks ja kaitsmiseks: läike taastamine ja kere kaitse väliste tegurite eest",
    descriptionFin:
      "Tehokkaat menetelmät auton kiillotukseen ja suojaukseen: kiillon palauttaminen ja korin suojaaminen ulkoisilta tekijöiltä.",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Полировка автомобилей является одной из наиболее эффективных процедур,
          которая помогает транспортному средству оставаться чистым и ухоженным.
          Полировка восстанавливает первоначальный блеск автомобиля, который
          потускнел в процессе эксплуатации. Также возможно отполировать и фары
          автомобиля.
        </p>
        <ServicesList
          header="Плюсы полировки:"
          listItems={[
            "хороший внешний вид кузова и защита от старения",
            "удаление микротрещин - используются порошкообразные и жидкие полироли:",
            "порошкообразный полироль – расщепляет старый слой лака, чтобы удалить микротрещины",
            "жидкий полироль или воск – защищает цвет кузова",
          ]}
        ></ServicesList>
        <p>
          Rattad24 не рекомендует использовать порошкообразные полироли для
          новых автомобилей. Покрытие автомобиля воском При покрытии автомобиля
          воском на поверхности автомобиля образуется невидимый защитный слой,
          который защищает автомобиль от асфальтовых брызг, щебенки и других
          повреждений, которые могут испортить внешний вид вашего автомобиля.
          Rattad24 рекомендует покрывать воском автомобиль весной и осенью,
          чтобы защитить кузов автомобиля от повреждения внешними факторами -
          грязь, дорожная соль, смола, насекомые, птичий помет и т.д. В летнее
          время автомобиль защищен воском от УФ-излучения и выгорания.
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Autode poleerimine on üks tõhusamaid protseduure, mis aitab sõidukil
          püsida puhtana ja hooldatuna. Poleerimine taastab auto esialgse läike,
          mis on kasutamise käigus tuhmiks muutunud. Samuti on võimalik
          poleerida ka auto esitulesid.
        </p>
        <ServicesList
          header="Poleerimise plussid:"
          listItems={[
            "hea välimus ja kaitse vananemise eest",
            "mikropragude eemaldamine – kasutatakse pulber- ja vedelpolüreid:",
            "pulberpolürol – lõhustab vana laki kihi, et eemaldada mikropragusid",
            "vedelpolürol või vaha – kaitseb kere värvi",
          ]}
        ></ServicesList>
        <p>
          Rattad24 ei soovita kasutada pulberpolüreid uutel autodel. Auto
          vahatamine Auto vahatamisel tekib auto pinnale nähtamatu kaitsekiht,
          mis kaitseb autot asfaldipritsmete, killustiku ja muude kahjustuste
          eest, mis võivad kahjustada teie auto välimust. Rattad24 soovitab auto
          vahatamist kevadel ja sügisel, et kaitsta auto keret väliste tegurite,
          nagu mustus, teesool, vaik, putukad, lindude väljaheited jms,
          kahjustamise eest. Suveperioodil kaitseb vaha autot UV-kiirguse ja
          pleekimise eest.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Auton kiillotus on yksi tehokkaimmista toimenpiteistä, joka auttaa
          ajoneuvoa pysymään puhtaana ja huoliteltuna. Kiillotus palauttaa auton
          alkuperäisen kiillon, joka on himmentynyt käytön aikana. Myös auton
          ajovalot voidaan kiillottaa.
        </p>
        <ServicesList
          header="Kiillotuksen edut:"
          listItems={[
            "hyvä ulkonäkö ja suoja ikääntymistä vastaan",
            "mikrohalkeamien poisto - käytetään jauhemaisia ja nestemäisiä kiillokkeita:",
            "jauhemainen kiilloke – poistaa vanhan lakkakerroksen mikrohalkeamien poistamiseksi",
            "nestemäinen kiilloke tai vaha – suojaa korin väriä",
          ]}
        ></ServicesList>
        <p>
          Rattad24 ei suosittele jauhemaisten kiillokkeiden käyttöä uusissa
          autoissa. Auton vahaus Auton vahaamisessa auton pinnalle muodostuu
          näkymätön suojakerros, joka suojaa autoa asfaltin roiskeilta, soralta
          ja muilta vaurioilta, jotka voivat pilata auton ulkonäön. Rattad24
          suosittelee auton vahausta keväällä ja syksyllä, jotta auton kori
          suojataan ulkoisilta tekijöiltä, kuten lialta, tiesuolalta, pihkalta,
          hyönteisiltä, lintujen ulosteilta jne. Kesällä vaha suojaa autoa
          UV-säteilyltä ja haalistumiselta.
        </p>
      </div>
    ),
    img: polishingImage,
  },
  {
    titleRus: "Ремонт и обслуживание",
    titleEst: "Remont ja hooldus",
    titleFin: "Korjaus ja huolto",
    descriptionRus: "Профессиональный авторемонт и обслуживание в Таллинне",
    descriptionEst: "Professionaalne autoremont ja hooldus Tallinnas",
    descriptionFin: "Ammattimainen autonkorjaus ja huolto Tallinnassa",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Авторемонт в Таллинне возможен в представительстве на Vesse 4
          Автомастерская Rattad24 предлагает профессиональный ремонт и
          обслуживание. Наша команда прошла профессиональное обучение и обладает
          необходимым опытом работы для оказания качественного обслуживания. В
          список услуг входят: замена аккумулятора, обслуживание автомобиля,
          проверка ходовой части, ремонт мотора, замена/ремонт коробки передач,
          заполнение кондиционеров, ремонт кондиционеров, сварочные работы и
          диагностика автомобиля. Перечисленные услуги качественно выполняются
          нашими обученными техниками, результат работ гарантирован. Контроль
          ходовой части рекомендуется делать каждые 10 000 км. Ходовая часть не
          в порядке если: при управлении автомобилем чувствуется люфт руля,
          автомобиль уводит в сторону, при движении слышится непривычный шум или
          стук/грохот, а также если автомобиль нестабилен на высоких скоростях
        </p>
        <ServicesList
          listItems={[
            "Жидкий металл — 6 евро (при высыхании заменяет металл, термоустойчив)",
            "Герметик — 5 евро (заменяет прокладки)",
            "Мойка мотора — 6 евро (очищение мотора от масляных пятен и грязи, что продлевает срок работы мотора)",
            "Маслоприсадки — от 8 евро",
            "Топливные присадки  — 4 евро",
          ]}
          header="Товары"
        />
        <ServicesList
          listItems={[
            "Ремонт ходовой части — 45 евро/час",
            "Замена ремней (зубчатый ремень, поликлиновый/ручейковый ремень, ролики, натяжители и т.д.) — от. 100 евро",
            "Электродиагностика — 55 евро, удаление ошибок — 45 евро",
            "Сварочные работы — 40 евро",
            "Заполнение кондиционера и контроль — 70 евро",
          ]}
          header="Стоимость услуг"
        />
        <ServicesList
          listItems={[
            "Ремонт дизельного мотора — от 45 евро/час",
            "Ремонт бензинового мотора — от 45 евро/час",
            "Замена масла — от 25 евро",
          ]}
          header="Ремонт мотора"
        />
        <ServicesList
          listItems={[
            "Проверка ходовой части — 25 евро",
            "Электрические работы — 65 евро",
          ]}
          header="Дополнительные услуги"
        />
        <p>Все цены содержат налог с оборота!</p>
        <p className="mt-4 font-bold">
          NB! Присутствие клиента во время проведения работ ЗАПРЕЩЕНО! В случае,
          если клиент желает присутствовать при выполнении работ в
          автомастерской, у Rattad24 есть право добавить 10 евро к стоимости
          часовой работы. Rattad24 не отвечает за оставленные на территории
          представительства автомобили и личные вещи клиентов.
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Autoremondi tegemine Tallinnas on võimalik Vesse 4 esinduses. Rattad24
          autotöökoda pakub professionaalset remonti ja hooldust. Meie meeskond
          on läbinud erialase koolituse ja omab vajalikku töökogemust
          kvaliteetse teeninduse osutamiseks. Teenuste hulka kuuluvad: aku
          vahetus, auto hooldus, veermiku kontroll, mootori remont, käigukasti
          vahetus/remont, kliimaseadmete täitmine, kliimaseadmete remont,
          keevitustööd ja auto diagnostika. Loetletud teenuseid teostavad meie
          koolitatud tehnikud kvaliteetselt, tööde tulemus on garanteeritud.
          Veermiku kontrolli soovitatakse teha iga 10 000 km järel. Veermik ei
          ole korras, kui: sõiduki juhtimisel on tunda rooli loksu, sõidukit
          tõmbab kõrvale, sõidu ajal kostub ebatavalist müra või kolinat/mürinat
          ning sõiduk on suurtel kiirustel ebastabiilne.
        </p>
        <ServicesList
          listItems={[
            "Vedelikmetall — 6 eurot (kuivamisel asendab metalli, kuumakindel)",
            "Hermeetik — 5 eurot (asendab tihendeid)",
            "Mootoripesu — 6 eurot (mootori puhastamine õliplekkidest ja mustusest, mis pikendab mootori tööiga)",
            "Õlilisandid — alates 8 eurost",
            "Kütuselisandid — 4 eurot",
          ]}
          header="Kaubad"
        />
        <ServicesList
          listItems={[
            "Veermiku remont — 45 eurot/tund",
            "Rihmade vahetus (hammasrihm, mitmekiilrihm, rullikud, pingutid jne.) — alates 100 eurost",
            "Elektridiagnostika — 55 eurot, vigade eemaldamine — 45 eurot",
            "Keevitustööd — 40 eurot",
            "Kliimaseadme täitmine ja kontroll — 70 eurot",
          ]}
          header="Teenuste hinnad"
        />
        <ServicesList
          listItems={[
            "Diiselmootori remont — alates 45 eurot/tund",
            "Bensiinimootori remont — alates 45 eurot/tund",
            "Õlivahetus — alates 25 eurost",
          ]}
          header="Mootori remont"
        />
        <ServicesList
          listItems={["Veermiku kontroll — 25 eurot", "Elektritööd — 65 eurot"]}
          header="Lisateenused"
        />
        <p>Kõik hinnad sisaldavad käibemaksu!</p>
        <p className="mt-4 font-bold">
          NB! Klientide viibimine tööde teostamise ajal on KEELATUD! Kui klient
          soovib olla kohal tööde teostamise ajal, on Rattad24-l õigus lisada 10
          eurot töötunni hinnale. Rattad24 ei vastuta esinduse territooriumile
          jäetud sõidukite ja isiklike asjade eest.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Auton korjaus Tallinnassa on mahdollista Vesse 4 -toimistossa.
          Rattad24-autokorjaamo tarjoaa ammattitaitoista korjausta ja huoltoa.
          Tiimimme on suorittanut ammattikoulutuksen ja omaa tarvittavan
          työkokemuksen laadukkaan palvelun tarjoamiseen. Palveluihin kuuluvat:
          akun vaihto, auton huolto, alustan tarkastus, moottorin korjaus,
          vaihdelaatikon vaihto/korjaus, ilmastointilaitteen täyttö,
          ilmastointilaitteen korjaus, hitsaustyöt ja auton diagnostiikka.
          Luetellut palvelut suorittavat koulutetut teknikkomme laadukkaasti, ja
          työn tulos on taattu. Alustan tarkastus suositellaan tehtäväksi 10 000
          kilometrin välein. Alusta ei ole kunnossa, jos: auton ohjauspyörä
          tuntuu löysältä, auto vetää sivulle, ajon aikana kuuluu epätavallista
          ääntä tai kolinaa/räminää, tai jos auto on epävakaa suurilla
          nopeuksilla.
        </p>
        <ServicesList
          listItems={[
            "Nestemetalli — 6 euroa (kuivuessaan korvaa metallin, lämmönkestävä)",
            "Tiivisteaine — 5 euroa (korvaa tiivisteet)",
            "Moottorin pesu — 6 euroa (moottorin puhdistus öljytahroista ja liasta, mikä pidentää moottorin käyttöikää)",
            "Öljyn lisäaineet — alkaen 8 eurosta",
            "Polttoaineen lisäaineet — 4 euroa",
          ]}
          header="Tuotteet"
        />
        <ServicesList
          listItems={[
            "Alustan korjaus — 45 euroa/tunti",
            "Hihnojen vaihto (hammashihna, monikiilahihna, rullat, kiristimet jne.) — alkaen 100 eurosta",
            "Sähködiagnostiikka — 55 euroa, virheiden poistaminen — 45 euroa",
            "Hitsaus — 40 euroa",
            "Ilmastointilaitteen täyttö ja tarkastus — 70 euroa",
          ]}
          header="Palveluiden hinnat"
        />
        <ServicesList
          listItems={[
            "Dieselmoottorin korjaus — alkaen 45 euroa/tunti",
            "Bensiinimoottorin korjaus — alkaen 45 euroa/tunti",
            "Öljynvaihto — alkaen 25 eurosta",
          ]}
          header="Moottorin korjaus"
        />
        <ServicesList
          listItems={["Alustan tarkastus — 25 euroa", "Sähkötyöt — 65 euroa"]}
          header="Lisäpalvelut"
        />
        <p>Kaikki hinnat sisältävät arvonlisäveron!</p>
        <p className="mt-4 font-bold">
          HUOM! Asiakkaiden läsnäolo työn suorittamisen aikana on KIELLETTY! Jos
          asiakas haluaa olla paikalla työn aikana, Rattad24:llä on oikeus
          lisätä 10 euroa tuntihintaan. Rattad24 ei vastaa toimitiloihin
          jätetyistä ajoneuvoista ja asiakkaiden henkilökohtaisista tavaroista.
        </p>
      </div>
    ),
    img: repairImage,
  },
  {
    titleRus: "Тюнинг и рестайлинг",
    titleEst: "Tuuning ja restüül",
    titleFin: "Viritys ja restyling",
    descriptionRus:
      "Индивидуальный тюнинг автомобиля в Rattad24: стильная адаптация ходовой части и мотора",
    descriptionEst:
      "Individuaalne autotuuning Rattad24-s: stiilne veermiku ja mootori kohandamine.",
    descriptionFin:
      "Yksilöllinen auton viritys Rattad24 ä: tyylikäs alustan ja moottorin mukauttaminen",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Наша фирма занимается тюнингом ходовой части автомобиля, мотора. Мы
          сделаем ваш автомобиль стильным! Слово &quot;тюнинг&quot; (англ.
          tuning) означает адаптацию/регулировку. Зарубежные мастера
          изготавливают готовую продукцию для улучшения внешнего облика
          автомобиля, с помощью которой можно придать автомобилю собственный
          индивидуальный облик. Тюнинг делается отдельно для каждого класса/типа
          автомобилей. Такими работами занимаются специальные тюнинг-студии. 
        </p>
        <p className="mt-4">
          <span className="font-bold">Тюнинг автомобиля</span> – изменение
          автомобиля в соответствии с желаниями автовладельца и состоянием
          автомобиля. Зачастую в результате тюнинга автомобиль меняется до
          неузнаваемости: внешний вид, интерьер, мотор, кузов автомобиля.
          Преимущество тюнинга состоит в том, что можно добиться абсолютно
          уникального облика автомобиля. 
        </p>
        <p className="mt-4">
          <span className="font-bold">Тюнинг мотора - </span>
          Подразумевает полную или частичную переделку мотора или укомплектовку
          мотора дополнительными деталями. Чип-тюнинг означает изменение
          электронного блока управления или замену на новый для увеличения
          мощности двигателя.
        </p>
        <p>
          Наиболее распространенный способ увеличить мощность двигателя -
          установить турбину.{" "}
        </p>
        <p>
          Дополнительно устанавливаются различные детали: коленчатый вал,
          поршни, форсунки, топливные насосы, фильтры, коллекторы и т.д.
          Неправильная установка системы может привести к проблемам с двигателем
          и коробкой передач. Поэтому очень важно доверить тюнинг двигателя
          специалистам. В нашей команде есть такие специалисты!
        </p>
        <p className="mt-4">
          <span className="font-bold">Тюнинг ходовой части - </span>
          Работа представляет собой стандартную замену амортизаторов или
          установку регулируемых спортивных амортизаторов. Замена резиновых
          сайлентблоков на полиуретановые. Низкий клиренс делает автомобиль
          более аэродинамическим, благодаря чему усиливается сцепление с дорогой
          и улучшается управляемость.
        </p>
        <p className="mt-4">
          <span className="font-bold ">Стайлинг –</span> изменение дизайна
          автомобиля в соответствии с выбранным направлением и стилем. Стайлинг
          автомобиля делится на две части: заводской и постзаводской стили
          (англ. aftermarket). Стайлинг отличается от тюнинга тем, что
          произведенные изменения не влияют на технические характеристики
          автомобиля (мотоцикла).
        </p>
        <ServicesList
          listItems={[
            `решетки – "mesh" (сетчатые) и "billet"`,
            `литые диски`,
            `аэродинамический комплект спойлеров (англ.  body kits) – спойлеры, дверные и боковые молдинги и т.д.`,
            `антикрыло`,
            `хромирование (англ. chrome trim)`,
          ]}
          header="Другие возможности:"
        />
        <p>
          Пользуется популярностью также и аэрография – это покрытие рисунком
          кузова автомобиля. Техника аэрографии состоит в следующем: на
          поверхность наносится желаемый цвет и затем на нём рисуется картинка.
          В итоге вы получаете совершенно другой уникальный автомобиль.
        </p>
        <p className="font-bold mt-4">Тюнинг интерьера салона</p>
        <p>
          Салон может быть изменен, например, для спортивной езды (англ. drift).
          Салон спортивного автомобиля не только привлекательный, но и
          функциональный. Такой салон называется &quot;голым&quot; (без
          звукоизолирующих материалов), для удобства устанавливается
          спортивный руль (лучше всего - с тремя спицами), специальный
          наконечник для переключения передач и рукоятка для ручного тормоза,
          нерегулируемые сиденья с твердыми боковинами, каркас безопасности
          (driftbox), дополнительное оборудование - монометр давления турбины,
          топливные датчик, датчик давления масла, датчик температуры масла,
          турбо-таймер и т.д.
        </p>
        <p className="font-bold mt-4">Тюнинг интерьера</p>
        <p>
          Как правило, сторонники этого стиля предпочитают сочетать
          функциональность, оригинальность и удобство.
        </p>
        <ServicesList
          listItems={[
            "спортивный руль",
            "анатомические сидения",
            "звуковая система",
            "перепрошивка салона кожей или Alcantara (отделочный материал)",
            "покрытие частей салона карбоном (пленка), например, приборную панель, внутренние молдинги и т.д.",
            "спортивные ремни безопасности",
            "дополнительное освещение салона, например, приборной панели, под педалями и т.д.",
          ]}
          header="Возможности тюнинга интерьера:"
        />
        <p className="font-bold mt-4">Презентабельный стиль</p>
        <p>
          В соответствии с пожеланиями автовладельца салон автомобиля можно
          преобразить до неузнаваемости благодаря презентабельному стилю.
          Главным образом для этого используются дорогие материалы – натуральная
          кожа, отделочный материал Alcantara, ценные породы дерева, металла,
          камня и т.д.
        </p>
        <p>
          Кроме того, в интерьер салона можно добавить плазменные телевизоры, c,
          музыкальное оборудование, мини-бар, холодильник, массажное кресло,
          телефон и т.д
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Meie ettevõte tegeleb auto veermiku ja mootori tuuninguga. Me teeme
          teie auto stiilseks! Sõna `&quot;`tuuning`&quot;` (ingl. tuning)
          tähendab kohandamist/reguleerimist. Välismaised meistrid valmistavad
          valmis tooteid auto välimuse parandamiseks, millega saab autole anda
          oma ainulaadse ilme. Tuuning tehakse eraldi iga autoklassi/tüübi
          jaoks. Sellise tööga tegelevad spetsiaalsed tuuningustuudiod.
        </p>
        <p className="mt-4">
          <span className="font-bold">Auto tuuning</span> – auto muutmine
          vastavalt autojuhi soovidele ja auto seisukorrale. Sageli muutub auto
          tuuningu tulemusena tundmatuseni: välimus, interjöör, mootor, auto
          kere. Tuuningu eeliseks on see, et on võimalik saavutada täiesti
          unikaalne auto välimus.
        </p>
        <p className="mt-4">
          <span className="font-bold">Mootori tuuning - </span>
          Hõlmab mootori täielikku või osalist ümberehitust või mootori
          varustamist täiendavate osadega. Chiptuning tähendab mootori juhtploki
          muutmist või selle asendamist uuega mootori võimsuse suurendamiseks.
        </p>
        <p>
          Kõige tavalisem viis mootori võimsuse suurendamiseks on
          turbokompressori paigaldamine.
        </p>
        <p>
          Täiendavalt paigaldatakse erinevaid osasid: väntvõll, kolvid,
          pihustid, kütusepumbad, filtrid, kollektorid jne. Süsteemi vale
          paigaldamine võib põhjustada probleeme mootori ja käigukastiga.
          Seetõttu on väga oluline usaldada mootori tuuning spetsialistidele.
          Meie meeskonnas on sellised spetsialistid!
        </p>
        <p className="mt-4">
          <span className="font-bold">Veermiku tuuning - </span>
          Töö hõlmab standardsete amortisaatorite vahetust või reguleeritavate
          sportamortisaatorite paigaldamist. Kummist pukside vahetamine
          polüuretaanist pukside vastu. Madal kliirens muudab auto
          aerodünaamilisemaks, mis parandab haarduvust teega ja juhitavust.
        </p>
        <p className="mt-4">
          <span className="font-bold">Stiilimuutmine (styling) –</span> auto
          disaini muutmine vastavalt valitud suunale ja stiilile. Auto
          stiilimuutmine jaguneb kaheks osaks: tehase- ja järeltehase stiilid
          (ingl. aftermarket). Stiilimuutmine erineb tuuningust selle poolest,
          et tehtud muudatused ei mõjuta auto (või mootorratta) tehnilisi
          omadusi.
        </p>
        <ServicesList
          listItems={[
            `iluvõred – "mesh" (võre) ja "billet"`,
            `valatud veljed`,
            `aerodünaamiline spoilrite komplekt (ingl. body kits) – spoilerid, ukse- ja külgmoldid jne.`,
            `antitiib`,
            `kroomimine (ingl. chrome trim)`,
          ]}
          header="Muud võimalused:"
        />
        <p>
          Populaarne on ka aerograafia – see on auto kere katmine joonistusega.
          Aerograafia tehnika seisneb selles, et pinnale kantakse soovitud värv
          ja seejärel joonistatakse sellele pilt. Tulemuseks on täiesti
          unikaalne auto.
        </p>
        <p className="font-bold mt-4">Interjööri tuuning</p>
        <p>
          Salongi saab muuta näiteks sportlikuks sõiduks (ingl. drift).
          Sportauto salong on mitte ainult atraktiivne, vaid ka funktsionaalne.
          Sellist salongi nimetatakse `&quot;`paljaks`&quot;` (ilma
          heliisolatsioonimaterjalideta), mugavuse huvides paigaldatakse
          sportrool (eelistatavalt kolme kodaraga), spetsiaalne käigukangi otsik
          ja käsipiduri käepide, reguleerimata istmed kõvade külgedega,
          turvakarkass (driftbox), lisavarustus – turborõhu manomeeter,
          kütusenäidik, õlirõhuandur, õlitemperatuuri andur, turbo-taimer jne.
        </p>
        <p className="font-bold mt-4">Interjööri tuuning</p>
        <p>
          Reeglina eelistavad selle stiili pooldajad ühendada funktsionaalsust,
          originaalsust ja mugavust.
        </p>
        <ServicesList
          listItems={[
            "sportrool",
            "anatoomilised istmed",
            "helisüsteem",
            "salongi katmine nahaga või Alcantaraga (viimistlusmaterjal)",
            "salongi osade katmine süsinikkiuga (kile), näiteks armatuurlaud, sisemised vormiosad jne.",
            "sportturvavööd",
            "salongi lisavalgustus, näiteks armatuurlaua, pedaalide all jne.",
          ]}
          header="Interjööri tuuningu võimalused:"
        />
        <p className="font-bold mt-4">Esinduslik stiil</p>
        <p>
          Vastavalt autojuhi soovidele saab auto salongi muuta tundmatuseni tänu
          esinduslikule stiilile. Selleks kasutatakse peamiselt kalleid
          materjale – naturaalne nahk, Alcantara, väärispuidu, metalli, kivi
          jne.
        </p>
        <p>
          Lisaks saab salongi lisada plasmatelerid, muusikaseadmed, minibaar,
          külmik, massaažitool, telefon jne.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Yrityksemme tarjoaa auton alustan ja moottorin viritystä. Teemme
          autostasi tyylikkään! Sana `&quot;`tuning`&quot;` (engl. tuning)
          tarkoittaa mukauttamista/säätämistä. Ulkomaiset asiantuntijat
          valmistavat valmiita tuotteita auton ulkonäön parantamiseksi, joiden
          avulla voit antaa autollesi yksilöllisen ilmeen. Viritykset tehdään
          erikseen jokaiselle autoluokalle/tyypille. Tällaisiin töihin
          erikoistuneet tuning-studiot.
        </p>
        <p className="mt-4">
          <span className="font-bold">Auton viritys</span> – auton muuttaminen
          auton omistajan toiveiden ja auton kunnon mukaan. Usein virityksen
          jälkeen auto muuttuu täysin: ulkonäkö, sisustus, moottori, auton
          runko. Virityksen etuna on, että auton ulkonäkö voi olla täysin
          ainutlaatuinen.
        </p>
        <p className="mt-4">
          <span className="font-bold">Moottorin viritys - </span>
          Tarkoittaa moottorin täydellistä tai osittaista uudelleenrakennusta
          tai moottorin varustamista lisäosilla. Chiptuning tarkoittaa moottorin
          ohjausyksikön muuttamista tai sen vaihtamista uuteen moottorin tehon
          lisäämiseksi.
        </p>
        <p>Yleisin tapa lisätä moottorin tehoa on asentaa turbo.</p>
        <p>
          Lisäksi asennetaan erilaisia osia: kampiakseli, männät, suuttimet,
          polttoainepumput, suodattimet, pakosarjat jne. Järjestelmän
          virheellinen asennus voi aiheuttaa ongelmia moottorissa ja
          vaihdelaatikossa. Siksi on erittäin tärkeää uskoa moottorin viritys
          asiantuntijoille. Tiimissämme on tällaisia asiantuntijoita!
        </p>
        <p className="mt-4">
          <span className="font-bold">Alustan viritys - </span>
          Työ sisältää vakiomallisten iskunvaimentimien vaihdon tai säädettävien
          urheilullisten iskunvaimentimien asennuksen. Kumihelojen vaihtaminen
          polyuretaaniholkeiksi. Matala maavara tekee autosta aerodynaamisemman,
          mikä parantaa pitoa ja ajettavuutta.
        </p>
        <p className="mt-4">
          <span className="font-bold">Styling –</span> auton muotoilu muutetaan
          valitun suunnan ja tyylin mukaisesti. Auton muotoilu jaetaan kahteen
          osaan: tehdas- ja jälkituotetyyleihin (engl. aftermarket). Styling
          eroaa virityksestä siinä, että tehdyt muutokset eivät vaikuta auton
          (tai moottoripyörän) teknisiin ominaisuuksiin.
        </p>
        <ServicesList
          listItems={[
            `ritilät – "mesh" ja "billet"`,
            `valetut vanteet`,
            `aerodynaamiset spoilerisarjat (engl. body kits) – spoilerit, ovien ja sivujen muoviosat jne.`,
            `takasiipi`,
            `kromaus (engl. chrome trim)`,
          ]}
          header="Muut mahdollisuudet:"
        />
        <p>
          Aerografia on myös suosittu – tämä tarkoittaa auton korin peittämistä
          kuvalla. Aerografia-tekniikka koostuu seuraavista vaiheista: pinnalle
          levitetään haluttu väri ja siihen maalataan kuva. Lopputuloksena saat
          täysin ainutlaatuisen auton.
        </p>
        <p className="font-bold mt-4">Sisätilojen viritys</p>
        <p>
          Sisustus voidaan muuttaa esimerkiksi urheiluajoon (engl. drift).
          Urheiluauton sisustus on paitsi houkutteleva myös toimiva. Tällainen
          sisustus kutsutaan `&quot;`paljaaksi`&quot;` (ilman
          äänieristysmateriaaleja), mukavuuden vuoksi asennetaan
          urheiluohjauspyörä (parhaimmillaan kolmisakarainen), erityinen
          vaihdevivun nuppi ja käsijarrukahva, ei-säädettävät istuimet kovilla
          sivuilla, turvakehikko (driftbox), lisävarusteet – turbopainemittari,
          polttoaineanturi, öljynpaineanturi, öljyn lämpötila-anturi,
          turbo-ajastin jne.
        </p>
        <p className="font-bold mt-4">Sisätilojen viritys</p>
        <p>
          Yleensä tämän tyylin kannattajat haluavat yhdistää toiminnallisuuden,
          omaperäisyyden ja mukavuuden.
        </p>
        <ServicesList
          listItems={[
            "urheiluohjauspyörä",
            "anatomiset istuimet",
            "äänijärjestelmä",
            "sisätilojen uudelleenverhoilu nahalla tai Alcantaralla (verhoilumateriaali)",
            "sisäosien peittäminen hiilikuidulla (kalvo), esimerkiksi kojelauta, sisäosat jne.",
            "urheiluturvavyöt",
            "sisätilojen lisävalaistus, esimerkiksi kojelaudan, polkimien alla jne.",
          ]}
          header="Sisätilojen viritysmahdollisuudet:"
        />
        <p className="font-bold mt-4">Edustava tyyli</p>
        <p>
          Auton omistajan toiveiden mukaisesti auton sisätilat voidaan muuttaa
          täysin edustavan tyylin avulla. Tähän käytetään pääasiassa kalliita
          materiaaleja – aitoa nahkaa, Alcantaraa, jalopuuta, metallia, kiveä
          jne.
        </p>
        <p>
          Lisäksi sisustukseen voidaan lisätä plasmatelevisiot,
          musiikkilaitteet, minibaari, jääkaappi, hierontatuoli, puhelin jne.
        </p>
      </div>
    ),
    img: tuning,
  },
  {
    titleRus: "Диагностика",
    titleEst: "Diagnostika",
    titleFin: "Diagnostiikka",
    descriptionRus:
      "Комплексная диагностика автомобиля в Rattad24: выявление скрытых неисправностей с помощью современного оборудования",
    descriptionEst:
      "Kompleksne auto diagnostika Rattad24-s: varjatud vigade tuvastamine kaasaegse varustuse abil.",
    descriptionFin:
      "Rattad24 kattava auton diagnostiikka: piilevien vikojen havaitseminen nykyaikaisella laitteistolla.",
    additionalDescriptionRus: (
      <div className="py-4">
        <ServicesList
          listItems={["мотор", "коробку передач", "электронику"]}
          header="В ходе проведения диагностики автомобиля можно проверить:"
        />
        <p>
          В случае, если специалист Rattad24 обнаружит неисправность в ходе
          диагностики, ее возможно устранить в нашей автомастерской.
        </p>
        <ServicesList
          listItems={[
            "быстрое обнаружение неисправностей",
            "отследить работу различных датчиков и системы зажигания",
            "устранить ошибки",
            "получить полную информацию о состоянии автомобиля",
          ]}
          header="Плюсы диагностики:"
        />
        <ServicesList
          listItems={[
            "диагностика мотора - 39 евро",
            "диагностика коробки передач - 39 евро",
            "диагностика электроники - 30 евро",
          ]}
          header="Стоимость услуг:"
        />
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <ServicesList
          listItems={["mootor", "käigukast", "elektroonika"]}
          header="Auto diagnostika käigus saab kontrollida:"
        />
        <p>
          Kui Rattad24 spetsialist avastab diagnostika käigus rikke, on seda
          võimalik meie autotöökojas kõrvaldada.
        </p>
        <ServicesList
          listItems={[
            "kiire vigade avastamine",
            "erinevate andurite ja süütesüsteemi töö jälgimine",
            "vigade eemaldamine",
            "täieliku teabe saamine auto seisukorra kohta",
          ]}
          header="Diagnostika eelised:"
        />
        <ServicesList
          listItems={[
            "mootori diagnostika - 39 eurot",
            "käigukasti diagnostika - 39 eurot",
            "elektroonika diagnostika - 30 eurot",
          ]}
          header="Teenuste hinnad:"
        />
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <ServicesList
          listItems={["moottori", "vaihdelaatikko", "elektroniikka"]}
          header="Auton diagnostiikan aikana voidaan tarkistaa:"
        />
        <p>
          Jos Rattad24:n asiantuntija havaitsee diagnostiikan aikana vian, se
          voidaan korjata autokorjaamossamme.
        </p>
        <ServicesList
          listItems={[
            "vikojen nopea havaitseminen",
            "erilaisten anturien ja sytytysjärjestelmän toiminnan seuraaminen",
            "virheiden poistaminen",
            "täydellisen tiedon saaminen auton kunnosta",
          ]}
          header="Diagnostiikan edut:"
        />
        <ServicesList
          listItems={[
            "moottorin diagnostiikka - 39 euroa",
            "vaihdelaatikon diagnostiikka - 39 euroa",
            "elektroniikan diagnostiikka - 30 euroa",
          ]}
          header="Palveluiden hinnat:"
        />
      </div>
    ),
    img: diagnosticsImage,
  },
  {
    titleRus: "Ремонт электроники",
    titleEst: "Elektroonika remont",
    titleFin: "Elektroniikan korjaus",
    descriptionRus:
      "Автоэлектрика в Rattad24: от замены ламп до комплексного ремонта электросистемы",
    descriptionEst:
      "Autoelektritööd Rattad24-s: alates pirnide vahetamisest kuni elektrosüsteemi täieliku remondini",
    descriptionFin:
      "Auton sähkötyöt Rattad24 ä: lamppujen vaihdosta sähköjärjestelmän kattavaan korjaukseen",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Rattad24 занимается автомобильными электроработами от замены лампочек
          и до замены проводки. В случае обнаружения неисправности в
          электросистеме автомобиля, автомобиль проходит диагностику, в ходе
          которой возможно выявить все возможные ошибки в электросистеме
          автомобиля. Чаще всего мы выполняем работы по блокам управления,
          стартерам, генераторам и источникам питания, а также по замене
          аккумуляторов.
        </p>
        <p className="mt-2">
          В случае, если вы обнаружили проблемы в электросистеме автомобиля,
          обратитесь к специалистам Rattad24.
        </p>
        <p className="mt-2">
          Специалисты Rattad24 готовы поделиться своими знаниями, а также
          произвести качественные ремонтные работы.
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Rattad24 tegeleb auto elektritöödega, alates pirnide vahetamisest kuni
          juhtmestiku vahetamiseni. Kui avastatakse viga auto elektrosüsteemis,
          tehakse auto diagnostika, mille käigus on võimalik tuvastada kõik
          võimalikud vead auto elektrosüsteemis. Kõige sagedamini teeme töid
          juhtplokkide, starterite, generaatorite ja toiteallikate kallal ning
          samuti akude vahetamist.
        </p>
        <p className="mt-2">
          Kui avastate oma auto elektrosüsteemis probleeme, pöörduge Rattad24
          spetsialistide poole.
        </p>
        <p className="mt-2">
          Rattad24 spetsialistid on valmis jagama oma teadmisi ning tegema
          kvaliteetseid remonditöid.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Rattad24 hoitaa auton sähkötyöt lampunvaihdoista johtosarjojen
          vaihtoon. Jos auton sähköjärjestelmässä havaitaan vika, suoritetaan
          diagnostiikka, jonka aikana voidaan tunnistaa kaikki mahdolliset
          virheet auton sähköjärjestelmässä. Yleisimmin teemme töitä
          ohjausyksiköiden, käynnistimien, generaattorien ja virtalähteiden
          parissa sekä akkujen vaihdossa.
        </p>
        <p className="mt-2">
          Jos huomaat ongelmia auton sähköjärjestelmässä, ota yhteyttä
          Rattad24:n asiantuntijoihin.
        </p>
        <p className="mt-2">
          Rattad24:n asiantuntijat ovat valmiita jakamaan tietonsa ja
          suorittamaan laadukasta korjaustyötä.
        </p>
      </div>
    ),
    img: electric,
  },
  {
    titleRus: "Ремонт коробки передач",
    titleEst: "Käigukasti remont",
    titleFin: "Vaihdelaatikon korjaus",
    descriptionRus:
      "Профессиональный ремонт мануальных и автоматических коробок передач в Rattad24: диагностика и замена с использованием оригинальных и B-категории запчастей",
    descriptionEst:
      "Professionaalne manuaal- ja automaatkäigukastide remont Rattad24-s: diagnostika ja vahetus originaal- ja B-kategooria varuosadega",
    descriptionFin:
      "Ammattimainen manuaali- ja automaattivaihdelaatikoiden korjaus Rattad24 ä: diagnostiikka ja vaihto alkuperäis- ja B-luokan varaosilla",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Rattad24 осуществляет ремонт как мануальной, так и автоматической
          коробок передач. Ремонт коробки передач - это объемная работа, в ходе
          которой заменяется коробка передач: демонтируется, разбирается,
          собирается и устанавливается обратно. До ремонта коробки передач
          необходимо убедиться, в чем именно заключается неисправность. Для
          этого, прежде всего, проводится диагностика. Ремонт коробки передач
          можно произвести как с помощью оригинальных, так и B-категории
          запчастей.
        </p>
        <ServicesList
          listItems={[
            "замена неисправных деталей",
            "замена фильтра коробки передач",
            "замена масла",
            "диагностика автомобиля",
          ]}
          header="Ремонт коробки передач проходит следующим образом:"
        />
        <ServicesList
          listItems={[
            "обороты мотора плавают при равномерной езде",
            "при ускорении появляется вибрация",
            "начало движения происходит с рывками",
            "при переключении передачи на более высокую повышаются обороты",
            "переключение передач происходит с рывками",
          ]}
          header="Ремонт коробки передач необходимо произвести, если:"
        />
        <ServicesList
          listItems={[
            "индивидуальный подход к каждому клиенту",
            "квалифицированный персонал",
            "качественная работа",
            "исправление ошибок",
          ]}
          header="Плюсы ремонта коробки передач:"
        />
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Rattad24 teostab nii manuaal- kui ka automaatkäigukastide remonti.
          Käigukasti remont on mahukas töö, mille käigus käigukast vahetatakse:
          see demonteeritakse, lahti võetakse, kokku pannakse ja paigaldatakse
          tagasi. Enne käigukasti remonti on vaja veenduda, milles täpselt viga
          seisneb. Selleks tehakse esmalt diagnostika. Käigukasti remonti saab
          teha nii originaal- kui ka B-kategooria varuosadega.
        </p>
        <ServicesList
          listItems={[
            "vigaste osade vahetamine",
            "käigukasti filtri vahetamine",
            "õlivahetus",
            "auto diagnostika",
          ]}
          header="Käigukasti remont toimub järgmiselt:"
        />
        <ServicesList
          listItems={[
            "mootori pöörete kõikumine ühtlasel sõidul",
            "kiirendamisel ilmneb vibratsioon",
            "liikumise alustamine toimub tõmblustega",
            "käigu vahetamisel kõrgemale tõusevad pöörded",
            "käikude vahetus toimub tõmblustega",
          ]}
          header="Käigukasti remont on vajalik, kui:"
        />
        <ServicesList
          listItems={[
            "individuaalne lähenemine igale kliendile",
            "kvalifitseeritud personal",
            "kvaliteetne töö",
            "vigade parandamine",
          ]}
          header="Käigukasti remondi eelised:"
        />
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Rattad24 suorittaa sekä manuaali- että automaattivaihdelaatikoiden
          korjaukset. Vaihdelaatikon korjaus on laaja työ, jossa vaihdelaatikko
          vaihdetaan: se puretaan, kootaan ja asennetaan takaisin. Ennen
          vaihdelaatikon korjausta on varmistettava, missä vika tarkalleen
          ottaen on. Tätä varten suoritetaan ensin diagnostiikka. Vaihdelaatikon
          korjaus voidaan suorittaa sekä alkuperäis- että B-luokan varaosilla.
        </p>
        <ServicesList
          listItems={[
            "vikojen osien vaihto",
            "vaihdelaatikon suodattimen vaihto",
            "öljynvaihto",
            "auton diagnostiikka",
          ]}
          header="Vaihdelaatikon korjaus etenee seuraavasti:"
        />
        <ServicesList
          listItems={[
            "moottorin kierrokset vaihtelevat tasaisessa ajossa",
            "kiihtyvyydessä ilmenee tärinää",
            "liikkeellelähtö tapahtuu nykäyksillä",
            "vaihdettaessa suurempaan vaihteeseen kierrokset nousevat",
            "vaihteiden vaihto tapahtuu nykäyksillä",
          ]}
          header="Vaihdelaatikon korjaus on tarpeen, jos:"
        />
        <ServicesList
          listItems={[
            "yksilöllinen lähestymistapa jokaiseen asiakkaaseen",
            "koulutettu henkilökunta",
            "laadukas työ",
            "virheiden korjaaminen",
          ]}
          header="Vaihdelaatikon korjauksen edut:"
        />
      </div>
    ),
    img: transmission,
  },
  {
    titleRus: "Сварочные работы",
    titleEst: "Keevitustööd",
    titleFin: "Hitsaustyöt",
    descriptionRus:
      "Качественные сварочные работы в Rattad24: обслуживание глушителей, ходовой части и кузова с использованием передового оборудования",
    descriptionEst:
      "Kvaliteetsed keevitustööd Rattad24-s: summutite, veermiku ja kere hooldus kaasaegse varustuse abil",
    descriptionFin:
      "Laatua hitsaustyöt Rattad24 ä: pakoputkien, alustan ja korin huolto nykyaikaisella laitteistolla",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Предлагаем сварочные работы для автомобиля, а также обслуживание и
          ремонт Сварочные работы включают в себя обслуживание глушителей,
          ходовой части (например подвески), устранение дефектов и деформаций с
          деталей и кузова автомобиля и т.д. При выполнении сварочных работ
          необходимо использовать высокотехнологичное оборудование/запчасти, а
          специалисты должны обладать необходимыми знаниями и опытом. Такие
          специалисты есть в нашей фирме!
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Pakume autodele keevitustöid ning hooldust ja remonti. Keevitustööd
          hõlmavad summutite, veermiku (näiteks vedrustuse) hooldust, defektide
          ja deformatsioonide kõrvaldamist auto detailidelt ja kerelt jne.
          Keevitustööde tegemisel on vaja kasutada kõrgetasemelist varustust ja
          varuosi ning spetsialistid peavad omama vajalikke teadmisi ja
          kogemusi. Meie ettevõttes on sellised spetsialistid olemas!
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Tarjoamme auton hitsaustöitä sekä huolto- ja korjauspalveluita.
          Hitsaustyöt sisältävät pakoputkien, alustan (esimerkiksi jousituksen)
          huollon, vikojen ja muodonmuutosten poistamisen auton osista ja
          korista jne. Hitsaustöissä on tärkeää käyttää huipputeknistä
          laitteistoa ja varaosia, ja asiantuntijoilla tulee olla tarvittavat
          tiedot ja kokemus. Meidän yrityksessämme on tällaisia asiantuntijoita!
        </p>
      </div>
    ),
    img: welding,
  },
  {
    titleRus: "Продажа запчастей",
    titleEst: "Varuosade müük",
    titleFin: "Varaosien myynti.",
    descriptionRus:
      "Оригинальные, б/у и запчасти A, B -категорий в Rattad24: гарантия надежности и долговечности для вашего автомобиля",
    descriptionEst:
      "Originaal-, kasutatud ja A- ning B-kategooria varuosad Rattad24-s: garantii teie auto usaldusväärsusele ja vastupidavusele",
    descriptionFin:
      "Alkuperäiset, käytetyt ja A- sekä B-luokan varaosat Rattad24 ä: takuu luotettavuudelle ja kestävyydelle autollesi",
    additionalDescriptionRus: (
      <div className="py-4">
        <p className="font-bold">
          Оригинальные запчасти и запчасти A-категории
        </p>
        <p>
          Такие запчасти произведены непосредственно на заводе, который
          производит автомобили. Оригинальные запчасти упакованы в специальный
          пакет и обозначены этикеткой, по которой можно узнать информацию о
          товаре. Поскольку качество запчастей A-категории сертифицировано со
          стороны автопроизводителя, такие запчасти считаются лучшими и подходят
          для всех автомобилей. Мы рекомендуем покупать запчасти только
          А-категории, если речь идет о таких важных запчастях, как подвеска и
          запчасти для системы рулевого управления. Популярность оригинальных
          запчастей объясняется тем, что они надежные и долговечные
        </p>
        <p className="font-bold mt-4">Запчасти B-категории</p>
        <p>
          Такие запчасти могут быть изготовлены разными производителями. Отличие
          запчастей B-категории от оригинальных запчастей - бюджетная цена.
          Иногда разница в стоимости запчастей может быть ниже в два-три раза. В
          связи с тем, что запчасти B-категории изготавливаются различными
          производителями, качество запчастей может варьироваться. Но иногда
          качество запчастей А и В-категории совпадает, несмотря на то, что цена
          во втором случае значительно ниже.
        </p>
        <p className="font-bold mt-4">Оригинальные б/у запчасти</p>
        <p>
          Оригинальные б/у запчасти тоже качественные, несмотря на то, что их
          стоимость по сравнению с запчастями А-категории ниже. Тем не менее, мы
          не рекомендуем вам использовать б/у запчасти, если они
          старые/изношенные. Чтобы избежать ситуации, когда вы можете получить
          неправильные или бракованные запчасти, мы рекомендуем приобретать
          товары у профессиональных дилеров. В случае, если у вас возникнут
          вопросы по заказу запчастей, пожалуйста обратитесь к нашим сотрудникам
          по телефону или электронной почте.
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p className="font-bold">Originaalvaruosad ja A-kategooria varuosad</p>
        <p>
          Sellised varuosad on toodetud otse tehases, mis toodab autosid.
          Originaalvaruosad on pakendatud spetsiaalsesse pakendisse ja
          märgistatud etiketiga, mille järgi saab toote kohta teavet. Kuna
          A-kategooria varuosade kvaliteet on sertifitseeritud autotootja poolt,
          peetakse neid varuosi parimateks ja need sobivad kõigile autodele.
          Soovitame osta ainult A-kategooria varuosi, kui tegemist on nii
          oluliste osadega nagu vedrustus ja roolisüsteemi osad.
          Originaalvaruosade populaarsus tuleneb nende usaldusväärsusest ja
          vastupidavusest.
        </p>
        <p className="font-bold mt-4">B-kategooria varuosad</p>
        <p>
          Selliseid varuosi võivad toota erinevad tootjad. B-kategooria
          varuosade eripära võrreldes originaalvaruosadega on soodne hind.
          Mõnikord võib varuosade hinnavahe olla kaks-kolm korda madalam. Kuna
          B-kategooria varuosi toodavad erinevad tootjad, võib varuosade
          kvaliteet varieeruda. Kuid mõnikord vastab A- ja B-kategooria
          varuosade kvaliteet üksteisele, hoolimata sellest, et viimaste hind on
          oluliselt madalam.
        </p>
        <p className="font-bold mt-4">Originaal kasutatud varuosad</p>
        <p>
          Originaal kasutatud varuosad on samuti kvaliteetsed, hoolimata
          sellest, et nende hind on võrreldes A-kategooria varuosadega madalam.
          Siiski ei soovita me kasutada kasutatud varuosi, kui need on
          vanad/kulunud. Et vältida olukorda, kus võite saada valed või
          defektsed varuosad, soovitame osta tooteid professionaalsetelt
          edasimüüjatelt. Kui teil tekib küsimusi varuosade tellimise kohta,
          võtke palun ühendust meie töötajatega telefoni või e-posti teel.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p className="font-bold">Alkuperäiset ja A-luokan varaosat</p>
        <p>
          Tällaiset varaosat on valmistettu suoraan tehtaassa, joka valmistaa
          autoja. Alkuperäiset varaosat on pakattu erityiseen pakkaukseen ja
          merkitty etiketillä, josta saa tietoa tuotteesta. Koska A-luokan
          varaosien laatu on autovalmistajan sertifioima, näitä varaosia
          pidetään parhaina, ja ne sopivat kaikkiin autoihin. Suosittelemme
          ostamaan vain A-luokan varaosia, kun kyseessä ovat niin tärkeät osat
          kuin jousitus ja ohjausjärjestelmän osat. Alkuperäisten varaosien
          suosio johtuu niiden luotettavuudesta ja kestävyydestä.
        </p>
        <p className="font-bold mt-4">B-luokan varaosat</p>
        <p>
          Näitä varaosia voivat valmistaa eri valmistajat. B-luokan varaosien
          ero alkuperäisiin varaosiin verrattuna on edullinen hinta. Joskus
          varaosien hintojen ero voi olla jopa kaksi tai kolme kertaa
          alhaisempi. Koska B-luokan varaosia valmistavat eri valmistajat,
          niiden laatu voi vaihdella. Kuitenkin joskus A- ja B-luokan varaosien
          laatu on sama, vaikka hinta onkin jälkimmäisessä tapauksessa
          huomattavasti alhaisempi.
        </p>
        <p className="font-bold mt-4">Käytetyt alkuperäiset varaosat</p>
        <p>
          Käytetyt alkuperäiset varaosat ovat myös laadukkaita, vaikka niiden
          hinta onkin alhaisempi kuin A-luokan varaosien. Emme kuitenkaan
          suosittele käytettyjen varaosien käyttöä, jos ne ovat vanhoja tai
          kuluneita. Välttääksesi tilanteita, joissa voit saada vääriä tai
          viallisia varaosia, suosittelemme ostamaan tuotteita ammattilaisilta
          jälleenmyyjiltä. Jos sinulla on kysyttävää varaosien tilaamisesta, ota
          yhteyttä henkilökuntaamme puhelimitse tai sähköpostitse.
        </p>
      </div>
    ),
    img: parts,
  },
  {
    titleRus: "Ремонт кондиционеров",
    titleEst: "Konditsioneeride remont",
    titleFin: "Ilmastointilaitteiden korjaus",
    descriptionRus:
      "Регулярное обслуживание кондиционера: замена фильтров и правильное заполнение для продления срока службы",
    descriptionEst:
      "Regulaarne konditsioneeri hooldus: filtrite vahetamine ja õige täitmine tööea pikendamiseks",
    descriptionFin:
      "Säännöllinen ilmastointilaitteen huolto: suodattimien vaihto ja oikea täyttö käyttöiän pidentämiseksi",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Регулярное заполнение кондиционера и замена воздушных фильтров дают
          положительные результаты в будущем. Мы рекомендуем вам делать контроль
          и уход за кондиционером каждые два года. Оттягивание с заполнением
          кондиционера может привести к ощутимым расходам в будущем. При
          заполнении кондиционера важно иметь в виду, что фрион или хладагент
          должны быть добавлены в соответствии с заводскими параметрами, которые
          можно найти под капотом или двигателем.
        </p>
        <p>
          Прежде, чем заполнять кондиционер специалисты Rattad24 должны
          убедиться, что в системе нет трещин (должна быть герметична) или
          повреждений алюминиевых трубок.
        </p>
        <p>
          Дополнительно Rattad24 предлагает ремонт оборудования кондиционеров, в
          системе которых есть трещины или насос кондиционера неисправен.
        </p>
        <ServicesList
          listItems={[
            "замену масла",
            "устранение влаги и других веществ",
            "ваакумный тест, тест на герметичность, очистку системы",
            "заполнение новым хладагентом",
          ]}
          header="Обслуживание кондиционера включает:"
        />
        <ServicesList
          listItems={[
            "устранение неприятного запаха",
            "устранение влаги и других веществ",
            "лечение аллергии :)",
          ]}
          header="Плюсы обслуживания кондиционера:"
        />
        <ServicesList
          listItems={[
            "контроль оборудования кондиционера — 20 евро",
            "заполнение кондиционера — от. 50 евро",
            "полная услуга заправки — 65 евро",
          ]}
          header="Стоимость услуг:"
        />
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Regulaarne konditsioneeri täitmine ja õhufiltrite vahetamine annavad
          tulevikus positiivseid tulemusi. Soovitame teil teha konditsioneeri
          kontrolli ja hooldust iga kahe aasta tagant. Konditsioneeri täitmise
          edasilükkamine võib tulevikus kaasa tuua märkimisväärseid kulusid.
          Konditsioneeri täitmisel on oluline arvestada, et freoon või
          külmutusaine tuleb lisada vastavalt tehase parameetritele, mis on
          märgitud kapoti all või mootoril.
        </p>
        <p>
          Enne konditsioneeri täitmist peavad Rattad24 spetsialistid veenduma,
          et süsteemis pole pragusid (süsteem peab olema hermeetiline) ega
          alumiiniumtorude kahjustusi.
        </p>
        <p>
          Lisaks pakub Rattad24 konditsioneeride seadmete remonti, kui süsteemis
          on pragusid või konditsioneeri pump on vigane.
        </p>
        <ServicesList
          listItems={[
            "õlivahetus",
            "niiskuse ja muude ainete eemaldamine",
            "vaakumtest, tihedustest, süsteemi puhastamine",
            "täitmine uue külmutusainega",
          ]}
          header="Konditsioneeri hooldus sisaldab:"
        />
        <ServicesList
          listItems={[
            "ebameeldiva lõhna eemaldamine",
            "niiskuse ja muude ainete eemaldamine",
            "allergia ravi :)",
          ]}
          header="Konditsioneeri hoolduse eelised:"
        />
        <ServicesList
          listItems={[
            "konditsioneeri seadmete kontroll — 20 eurot",
            "konditsioneeri täitmine — alates 50 eurost",
            "täisteenus täitmine — 65 eurot",
          ]}
          header="Teenuste hinnad:"
        />
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Säännöllinen ilmastointilaitteen täyttö ja ilmansuodattimien vaihto
          antavat positiivisia tuloksia tulevaisuudessa. Suosittelemme tekemään
          ilmastointilaitteen tarkastuksen ja huollon kahden vuoden välein.
          Ilmastointilaitteen täytön lykkääminen voi aiheuttaa tulevaisuudessa
          merkittäviä kustannuksia. Ilmastointilaitteen täytössä on tärkeää
          muistaa, että freonia tai jäähdytysainetta tulee lisätä
          tehdasasetusten mukaisesti, jotka löytyvät konepellin alta tai
          moottorista.
        </p>
        <p>
          Ennen ilmastointilaitteen täyttöä Rattad24:n asiantuntijoiden on
          varmistettava, että järjestelmässä ei ole halkeamia (järjestelmän on
          oltava tiivis) tai alumiiniputkien vaurioita.
        </p>
        <p>
          Lisäksi Rattad24 tarjoaa ilmastointilaitteiden laitteiden korjausta,
          jos järjestelmässä on halkeamia tai ilmastointipumppu on viallinen.
        </p>
        <ServicesList
          listItems={[
            "öljynvaihto",
            "kosteuden ja muiden aineiden poisto",
            "tyhjiötesti, tiiviystesti, järjestelmän puhdistus",
            "täyttö uudella jäähdytysaineella",
          ]}
          header="Ilmastointilaitteen huolto sisältää:"
        />
        <ServicesList
          listItems={[
            "epämiellyttävän hajun poistaminen",
            "kosteuden ja muiden aineiden poisto",
            "allergian hoito :)",
          ]}
          header="Ilmastointilaitteen huollon edut:"
        />
        <ServicesList
          listItems={[
            "ilmastointilaitteen laitteiden tarkastus — 20 euroa",
            "ilmastointilaitteen täyttö — alkaen 50 eurosta",
            "täysi täyttöpalvelu — 65 euroa",
          ]}
          header="Palveluiden hinnat:"
        />
      </div>
    ),
    img: conditioner,
  },
  {
    titleRus: "Покрасочные работы",
    titleEst: "Värvitööd",
    titleFin: "Maalaustyöt",
    descriptionRus:
      "Измените внешний вид и защитите кузов: покраска автомобиля в Rattad24 для стиля и долговечности",
    descriptionEst:
      "Muutke välimust ja kaitske keret: auto värvimine Rattad24-s stiili ja vastupidavuse tagamiseks",
    descriptionFin:
      "Muuta ulkonäköä ja suojaa kori: auton maalaus Rattad24 ä tyyliä ja kestävyyttä varten",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Измените внешний вид вашего автомобиля и защитите кузов автомобиля от
          внешних воздействий Покраска автомобиля – это не только изменение или
          восстановление внешнего облика автомобиля, но и защита кузова
          автомобиля от внешних воздействий, что увеличивает срок эксплуатации
          деталей транспортного средства.
        </p>
        <p>
          Покраска автомобиля, покрытие лаком, сушка проходят в специально
          оборудованной покрасочной. Краски и лаки выбираются с помощью
          специального оборудования с использованием компьютерной программы,
          чтобы подобрать максимально подходящий тон краски. Для окрашивания
          используется специальная технология. Все этапы покраски выполняются
          квалифицированным опытным специалистом. Стоимость покраски автомобиля
          варьируется в зависимости от марки автомобиля, состояния, типа краски,
          наличия поврежденных поверхностей, объема ремонтных и покрасочных
          работ. Для получения персонального предложения свяжитесь, пожалуйста,
          с нашими специалистами. 
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Muutke oma auto välimust ja kaitske kere välismõjude eest. Auto
          värvimine ei ole ainult auto välimuse muutmine või taastamine, vaid ka
          auto kere kaitse välismõjude eest, mis pikendab sõiduki osade
          kasutusiga.
        </p>
        <p>
          Auto värvimine, lakkimine ja kuivatamine toimuvad spetsiaalselt
          varustatud värvikambris. Värvid ja lakid valitakse spetsiaalse seadme
          abil, kasutades arvutiprogrammi, et leida kõige sobivam värvitoon.
          Värvimiseks kasutatakse spetsiaalset tehnoloogiat. Kõiki
          värvimisetappe viib läbi kvalifitseeritud ja kogenud spetsialist. Auto
          värvimise hind varieerub sõltuvalt auto margist, seisukorrast, värvi
          tüübist, kahjustatud pindade olemasolust, remondi ja värvimise tööde
          mahust. Isikliku pakkumise saamiseks võtke palun ühendust meie
          spetsialistidega.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Muuta autosi ulkonäköä ja suojaa kori ulkoisilta vaikutuksilta. Auton
          maalaus ei ole pelkästään auton ulkonäön muuttamista tai
          palauttamista, vaan myös korin suojaamista ulkoisilta vaikutuksilta,
          mikä pidentää ajoneuvon osien käyttöikää.
        </p>
        <p>
          Auton maalaus, lakkaus ja kuivaus suoritetaan erityisesti varustetussa
          maalaamossa. Maalit ja lakat valitaan erikoislaitteella käyttäen
          tietokoneohjelmaa, jotta voidaan löytää mahdollisimman sopiva
          maalisävy. Maalaukseen käytetään erityistä tekniikkaa. Kaikki
          maalausvaiheet suorittaa pätevä ja kokenut asiantuntija. Auton
          maalaushinta vaihtelee automerkin, kunnon, maalityypin,
          vaurioituneiden pintojen, korjaus- ja maalaustöiden määrän mukaan.
          Henkilökohtaisen tarjouksen saamiseksi ota yhteyttä
          asiantuntijoihimme.
        </p>
      </div>
    ),
    img: paint,
  },
  {
    titleRus: "Удаление вмятин",
    titleEst: "Mõlkide eemaldamine",
    titleFin: "Lommien poisto",
    descriptionRus:
      "Удаление вмятин без окрашивания в Rattad24: эффективное восстановление капота, крыши и крыльев с помощью PDR-технологии",
    descriptionEst:
      "Mõlkide eemaldamine ilma värvimiseta Rattad24-s: kapoti, katuse ja tiibade tõhus taastamine PDR-tehnoloogia abil",
    descriptionFin:
      "Lommien poisto ilman maalausta Rattad24 ä: konepellin, katon ja lokasuojien tehokas palauttaminen PDR-tekniikalla",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Rattad24 предлагает услугу по удалению вмятин с автомобиля без
          необходимости производить последующее окрашивание. Возможно удалить
          вмятины на автомобиле с капота, крыши и крыла. Для удаления вмятин
          используется PDR-технология. Мы удаляем вмятины размером до одного
          метра.
        </p>
        <p>Время работы - пара часов.</p>
        <ServicesList
          listItems={[
            "в связи с природными факторами",
            "в связи с вандализмом",
            "в связи с дорожным происшествием",
            "в связи с парковкой",
          ]}
          header="Вмятины могут возникнуть:"
        />
        <ServicesList
          listItems={[
            "детали не снимаются с кузова автомобиля",
            "высокоэффективная технология, которая позволяет быстро удалить вмятины без необходимости последующей окраски детали",
            "быстро и качественно",
          ]}
          header="Плюсы:"
        />
        <p className="font-bold">
          NB! Мы удаляем вмятины только в том случае, если в слое краски нет
          трещин или других повреждений.
        </p>
        <ServicesList
          listItems={["одна деталь — от 60 евро", "крыша — от 100 евро"]}
          header="Стоимость услуг:"
        />
        <p>
          Приезжайте в автомастерскую Rattad24 и получите бесплатную
          консультацию. Наша команда всегда готова вам помочь!
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Rattad24 pakub mõlkide eemaldamise teenust ilma, et oleks vaja hiljem
          värvimistöid teostada. Võimalik on eemaldada mõlgid auto kapotilt,
          katuselt ja tiivalt. Mõlkide eemaldamiseks kasutatakse
          PDR-tehnoloogiat. Eemaldame mõlgid kuni ühe meetri suurused.
        </p>
        <p>Tööaeg - paar tundi.</p>
        <ServicesList
          listItems={[
            "looduslike tegurite tõttu",
            "vandalismi tõttu",
            "liiklusõnnetuse tõttu",
            "parkimise tõttu",
          ]}
          header="Mõlgid võivad tekkida:"
        />
        <ServicesList
          listItems={[
            "osi ei eemaldata auto kerelt",
            "kõrge efektiivsusega tehnoloogia, mis võimaldab kiiresti eemaldada mõlgid ilma vajaduseta detaili hiljem värvida",
            "kiire ja kvaliteetne",
          ]}
          header="Eelised:"
        />
        <p className="font-bold">
          NB! Eemaldame mõlgid ainult siis, kui värvikihis pole pragusid ega
          muid kahjustusi.
        </p>
        <ServicesList
          listItems={[
            "üks detail — alates 60 eurost",
            "katus — alates 100 eurost",
          ]}
          header="Teenuste hinnad:"
        />
        <p>
          Tulge Rattad24 autoteenindusse ja saage tasuta konsultatsioon. Meie
          meeskond on alati valmis teid aitama!
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Rattad24 tarjoaa lommien poistoa ilman, että tarvitsee tehdä
          uudelleenmaalausta. On mahdollista poistaa lommot auton konepellistä,
          katosta ja lokasuojista. Lommien poistamiseen käytetään
          PDR-tekniikkaa. Poistamme lommot, jotka ovat enintään yhden metrin
          kokoisia.
        </p>
        <p>Työaika - pari tuntia.</p>
        <ServicesList
          listItems={[
            "luonnonilmiöiden vuoksi",
            "vandalismista johtuen",
            "liikenneonnettomuudesta johtuen",
            "pysäköinnistä johtuen",
          ]}
          header="Lommot voivat syntyä:"
        />
        <ServicesList
          listItems={[
            "osia ei irroteta auton korista",
            "tehokas teknologia, joka mahdollistaa lommien nopean poistamisen ilman, että osaa tarvitsee maalata uudelleen",
            "nopea ja laadukas",
          ]}
          header="Edut:"
        />
        <p className="font-bold">
          HUOM! Poistamme lommot vain, jos maalikerroksessa ei ole halkeamia tai
          muita vaurioita.
        </p>
        <ServicesList
          listItems={["yksi osa — alkaen 60 euroa", "katto — alkaen 100 euroa"]}
          header="Palveluiden hinnat:"
        />
        <p>
          Tule Rattad24-autokorjaamoon ja saat ilmaisen konsultoinnin. Tiimimme
          on aina valmis auttamaan sinua!
        </p>
      </div>
    ),
    img: dents,
  },
  {
    titleRus: "Замена масла",
    titleEst: "Õlivahetus",
    titleFin: "Öljynvaihto",
    descriptionRus:
      "Своевременная замена моторного масла в Rattad24: продлите срок службы вашего двигателя и автомобиля",
    descriptionEst:
      "Õigeaegne mootoriõli vahetus Rattad24-s: pikendage oma mootori ja auto eluiga",
    descriptionFin:
      "Ajoissa suoritettu moottoriöljyn vaihto Rattad24 ä: pidennä moottorisi ja autosi käyttöikää",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Замена моторного масла продлевает работу мотора, если она сделана
          своевременно. Приезжайте на обслуживание в Rattad24, и наша команда
          заменит масло на вашем автомобиле! Самый важный уход для автомобиля -
          это замена масла, которая продлевает срок эксплуатации мотора и других
          важных частей автомобиля. Rattad24 рекомендует делать замену масла в
          соответствии с километражом. В целом масло заменяется на старых
          дизельных моторах после 10 000 км пробега, на новых - после 15 000 км.
          В случае с бензиновыми моторами мы рекомендуем менять масло после
          каждых 15 000 км пробега на старых автомобилях и до 30 000 км на
          новых.
        </p>
        <p>
          Rattad24 предлагает своим клиентам качественные моторные масла и
          фильтры. Вы можете заменить масло в нашем представительстве по адресу
          Вессе 4, Таллинн (Ласнамяги).
        </p>
        <p>
          Важно знать, что для каждого автомобиля подходит конкретное моторное
          масло. Использование неподходящего масла может привести, например, к
          засорению фильтра и неисправности турбины.
        </p>
        <p>Вместе с заменой масла необходимо заменить и фильтр.</p>
        <ServicesList
          listItems={[
            "увеличить износоустойчивость деталей",
            "рассеять избыточное тепло между деталями",
            "сохранить детали мотора чистыми",
          ]}
          header="Задачи моторного масла"
        />
        <ServicesList
          listItems={[
            "двигатель работает на холостом ходу (например, в пробках)",
            "короткие поездки (двигатель не успевает достичь нужной температуры, необходимой для зимнего вождения)",
            "вождение на высокой скорости",
            "интенсивное ускорение",
            "утечка охлаждающей жидкости из отсека двигателя, неисправность канала охлаждающей жидкости",
            "проникновение выхлопных газов в картер",
          ]}
          header="Условия, при которых необходимо заменить масло:"
        />
        <p className="font-bold">
          Стоимость моторного масла можно уточнить у наших сотрудников, цена
          зависит от предпочтений клиента.
        </p>
        <ServicesList
          listItems={[
            "замена масла на автоматической коробке передач",
            "замена тормозной жидкости",
          ]}
          header="Дополнительные услуги:"
        />
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Mootoriõli vahetamine pikendab mootori eluiga, kui see tehakse
          õigeaegselt. Tulge hooldusesse Rattad24-sse ja meie meeskond vahetab
          teie auto õli! Kõige olulisem hooldus autole on õlivahetus, mis
          pikendab mootori ja teiste oluliste osade kasutusiga. Rattad24
          soovitab teha õlivahetust vastavalt läbisõidule. Üldiselt vahetatakse
          õli vanadel diiselmootoritel pärast 10 000 km läbimist, uutel pärast
          15 000 km. Bensiinimootoritega soovitame õli vahetada pärast iga 15
          000 km läbimist vanadel autodel ja kuni 30 000 km uutel autodel.
        </p>
        <p>
          Rattad24 pakub oma klientidele kvaliteetseid mootoriõlisid ja
          filtreid. Võite õli vahetada meie esinduses aadressil Vesse 4, Tallinn
          (Lasnamäe).
        </p>
        <p>
          On oluline teada, et igale autole sobib konkreetne mootoriõli.
          Sobimatu õli kasutamine võib põhjustada näiteks filtri ummistumist ja
          turboprobleeme.
        </p>
        <p>Koos õlivahetusega on vaja vahetada ka filter.</p>
        <ServicesList
          listItems={[
            "suurendada osade kulumiskindlust",
            "hajutada liigset soojust osade vahel",
            "hoida mootori osad puhtad",
          ]}
          header="Mootoriõli ülesanded"
        />
        <ServicesList
          listItems={[
            "mootor töötab tühikäigul (näiteks ummikutes)",
            "lühikesed sõidud (mootor ei jõua saavutada vajalikku temperatuuri, mis on vajalik talviseks sõiduks)",
            "sõitmine suurel kiirusel",
            "intensiivne kiirendamine",
            "jahutusvedeliku lekkimine mootoriruumist, jahutusvedeliku kanali rike",
            "heitgaaside sattumine karterisse",
          ]}
          header="Tingimused, mille korral on vaja õli vahetada:"
        />
        <p className="font-bold">
          Mootoriõli hinna saate teada meie töötajatelt, hind sõltub kliendi
          eelistustest.
        </p>
        <ServicesList
          listItems={[
            "õlivahetus automaatkäigukastis",
            "pidurivedeliku vahetus",
          ]}
          header="Lisateenused:"
        />
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Moottoriöljyn vaihto pidentää moottorin käyttöikää, jos se tehdään
          ajoissa. Tule huoltoon Rattad24:ssä, ja tiimimme vaihtaa öljyn
          autossasi! Tärkein huoltotoimenpide autolle on öljynvaihto, joka
          pidentää moottorin ja muiden tärkeiden osien käyttöikää. Rattad24
          suosittelee öljynvaihtoa ajokilometrien mukaan. Yleensä öljy
          vaihdetaan vanhoissa dieselmoottoreissa 10 000 km jälkeen, uusissa 15
          000 km jälkeen. Bensiinimoottoreilla suosittelemme öljyn vaihtoa
          jokaisen 15 000 km jälkeen vanhoilla autoilla ja jopa 30 000 km
          uusilla autoilla.
        </p>
        <p>
          Rattad24 tarjoaa asiakkailleen laadukkaita moottoriöljyjä ja
          suodattimia. Voit vaihtaa öljyn toimipisteessämme osoitteessa Vesse 4,
          Tallinna (Lasnamäe).
        </p>
        <p>
          On tärkeää tietää, että jokaiselle autolle sopii tietty moottoriöljy.
          Väärän öljyn käyttö voi johtaa esimerkiksi suodattimen tukkeutumiseen
          ja turbiinivikoihin.
        </p>
        <p>Öljynvaihdon yhteydessä on tarpeen vaihtaa myös suodatin.</p>
        <ServicesList
          listItems={[
            "lisätä osien kulutuskestävyyttä",
            "hajottaa ylimääräistä lämpöä osien välillä",
            "pitää moottorin osat puhtaina",
          ]}
          header="Moottoriöljyn tehtävät"
        />
        <ServicesList
          listItems={[
            "moottori käy tyhjäkäynnillä (esimerkiksi ruuhkissa)",
            "lyhyet matkat (moottori ei saavuta tarvittavaa lämpötilaa, joka on tarpeen talviajoon)",
            "ajo suurella nopeudella",
            "intensiivinen kiihdytys",
            "jäähdytysnesteen vuoto moottoritilasta, jäähdytysnesteen kanavan vika",
            "pakokaasun pääsy kampikammioon",
          ]}
          header="Olot, joissa öljynvaihto on tarpeen:"
        />
        <p className="font-bold">
          Moottoriöljyn hinnan voit tiedustella henkilökunnaltamme, hinta
          riippuu asiakkaan mieltymyksistä.
        </p>
        <ServicesList
          listItems={[
            "öljynvaihto automaattivaihteistossa",
            "jarrunesteen vaihto",
          ]}
          header="Lisäpalvelut:"
        />
      </div>
    ),
    img: oil,
  },
  {
    titleRus: "Регулировка моста",
    titleEst: "Silla reguleerimine",
    titleFin: "Akselinsäätö",
    descriptionRus:
      "Регулировка мостов на стенде Hunter 3D в Rattad24: точная настройка передних и задних мостов с использованием передовых технологий",
    descriptionEst:
      "Sildade reguleerimine Hunter 3D stendil Rattad24-s: esisilla ja tagasilla täpne seadistamine kasutades tipptasemel tehnoloogiat",
    descriptionFin:
      "Akselien säätö Hunter 3D -laitteella Rattad24 ä: etu- ja taka-akselien tarkka säätö edistyksellisellä teknologialla",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Регулировка моста на стенде Hunter 3D Rattad24 выполняет работы по
          регулировке моста в соответствии с современными технологиями. Мы
          выполняем работы по регулировке переднего и заднего мостов, а также
          ремонт мостов. Регулировку моста рекомендуется делать после каждых
          20-25 км.
        </p>
        <ServicesList
          listItems={[
            "произошел удар колеса",
            "если колесо попало в яму",
            "после проведения таких серьезных ремонтных работ, как, например, замена рулевого наконечника",
            "протектор колес стирается быстро и неравномерно",
            "на дороге автомобиль уводит в сторону",
          ]}
          header="Мы рекомендуем выполнить регулировку мостов, если:"
        />
        <ServicesList
          listItems={[
            "уменьшение расходов на топливо",
            "более равномерный износ шин",
            "уменьшение отклонения автомобиля на дороге",
            "лучшее управление автомобилем",
          ]}
          header="Регулировка моста обеспечивает:"
        />
        <ServicesList
          listItems={[
            "легковой автомобиль, передний мост — 35 евро",
            "легковой автомобиль, задний мост — 25 евро",
            "легковой автомобиль, оба моста  — 50 евро",
            "внедорожник/коммерческий транспорт, передний мост — 40 евро",
            "внедорожник/коммерческий транспорт, задний мост — 30 евро",
            "внедорожник/коммерческий транспорт, оба моста — 60 евро",
          ]}
          header="Стоимость услуг по регулировке моста:"
        />
        <p className="font-bold">Все цены содержат налог с оборота!</p>
        <p className="font-bold">
          NB! Присутствие клиента во время проведения работ ЗАПРЕЩЕНО! В случае,
          если клиент желает присутствовать при выполнении работ в
          автомастерской, у Rattad24 есть право добавить 10 евро к стоимости
          часовой работы. Rattad24 не отвечает за оставленные на территории
          представительства автомобили и личные вещи клиентов.
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Sildade reguleerimine Hunter 3D stendil Rattad24 teostab
          sillaregulatsiooni töid vastavalt kaasaegsetele tehnoloogiatele.
          Teostame esisilla ja tagasilla reguleerimist ning ka sildade remonti.
          Soovitame teha sildade reguleerimist iga 20-25 km järel.
        </p>
        <ServicesList
          listItems={[
            "on toimunud ratta löök",
            "ratas on sattunud auku",
            "pärast selliste tõsiste remonditööde tegemist nagu näiteks roolivarda otsa vahetamine",
            "rehvimuster kulub kiiresti ja ebaühtlaselt",
            "teel tõmbab autot kõrvale",
          ]}
          header="Soovitame teha sildade reguleerimist, kui:"
        />
        <ServicesList
          listItems={[
            "kütusekulu vähenemine",
            "ühtlasem rehvide kulumine",
            "auto kõrvalekalde vähenemine teel",
            "parem auto juhtimine",
          ]}
          header="Sildade reguleerimine tagab:"
        />
        <ServicesList
          listItems={[
            "sõiduauto, esisild — 35 eurot",
            "sõiduauto, tagasild — 25 eurot",
            "sõiduauto, mõlemad sillad — 50 eurot",
            "maastur/kaubik, esisild — 40 eurot",
            "maastur/kaubik, tagasild — 30 eurot",
            "maastur/kaubik, mõlemad sillad — 60 eurot",
          ]}
          header="Sillaregulatsiooni teenuste hinnad:"
        />
        <p className="font-bold">Kõik hinnad sisaldavad käibemaksu!</p>
        <p className="font-bold">
          NB! Klientide viibimine tööde teostamise ajal on KEELATUD! Kui klient
          soovib olla kohal tööde teostamise ajal, on Rattad24-l õigus lisada 10
          eurot töötunni hinnale. Rattad24 ei vastuta esinduse territooriumile
          jäetud sõidukite ja isiklike asjade eest.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Akselien säätö Hunter 3D -laitteella Rattad24 suorittaa
          akselinsäätötyöt nykyaikaisilla teknologioilla. Suoritamme etu- ja
          taka-akselien säätöä sekä myös akselien korjausta. Suosittelemme
          akselien säätöä 20-25 km välein.
        </p>
        <ServicesList
          listItems={[
            "on tapahtunut pyörän isku",
            "pyörä on osunut kuoppaan",
            "sellaisten vakavien korjaustöiden jälkeen, kuten esimerkiksi ohjaustangon pään vaihto",
            "renkaan kulutuspinta kuluu nopeasti ja epätasaisesti",
            "autoa vetää tiellä sivulle",
          ]}
          header="Suosittelemme akselien säätöä, jos:"
        />
        <ServicesList
          listItems={[
            "polttoainekustannusten vähentäminen",
            "renkaiden tasaisempi kuluminen",
            "auton poikkeamien vähentäminen tiellä",
            "parempi auton hallinta",
          ]}
          header="Akselinsäätö varmistaa:"
        />
        <ServicesList
          listItems={[
            "henkilöauto, etuakseli — 35 euroa",
            "henkilöauto, taka-akseli — 25 euroa",
            "henkilöauto, molemmat akselit — 50 euroa",
            "maastoauto/kevyt hyötyajoneuvo, etuakseli — 40 euroa",
            "maastoauto/kevyt hyötyajoneuvo, taka-akseli — 30 euroa",
            "maastoauto/kevyt hyötyajoneuvo, molemmat akselit — 60 euroa",
          ]}
          header="Akselinsäätöpalveluiden hinnat:"
        />
        <p className="font-bold">Kaikki hinnat sisältävät arvonlisäveron!</p>
        <p className="font-bold">
          HUOM! Asiakkaiden läsnäolo työn suorittamisen aikana on KIELLETTY! Jos
          asiakas haluaa olla paikalla työn aikana, Rattad24:llä on oikeus
          lisätä 10 euroa tuntihintaan. Rattad24 ei vastaa toimitiloihin
          jätetyistä ajoneuvoista ja asiakkaiden henkilökohtaisista tavaroista.
        </p>
      </div>
    ),
    img: "",
  },
  {
    titleRus: "Шинные работы",
    titleEst: "Rehvitööd",
    titleFin: "Rengastyöt",
    descriptionRus:
      "Шинные работы в Rattad24: профессиональный ремонт проколов с использованием современных технологий",
    descriptionEst:
      "Rehvitööd Rattad24-s: professionaalne torkeparandus kaasaegsete tehnoloogiate abil",
    descriptionFin:
      "Rengastyöt Rattad24 ä: ammattimainen reikien korjaus nykyaikaisten teknologioiden avulla",
    additionalDescriptionRus: (
      <div className="py-4">
        <p>
          Rattad24 выполняет шинные работы, которые включают в себя ремонт шин.
          Под ремонтом шины подразумевается, например, устранение проколов в
          шине, для чего используются резиновые заплатки и шнурки. При ремонте
          шин используются современные технологии.
        </p>
        <p className="font-bold">
          Замена резины – это профессиональная ручная работа, которая повышает
          Ваше чувство безопасности, увеличивает срок жизни автомобиля и резины.
        </p>
        <p>
          Rattad24 выполняет различные шинные работы. К шинным работам относят:
          монтаж резины, балансировка, хранение, чистка дисков, ремонт шин. Мы
          рекомендуем проверить болты после монтажа через 100 км.
        </p>
        <p className="font-bold">Прайс-лист таллинской мастерской</p>
        <ServicesList
          listItems={[
            "Грузики для дисков — 5 евро/100 гр. (грузики черного/белого цвета, с камнями)",
            "Секретки — 45-60 евро/комплект (разной длины, с разными шагами резьбы, обычные и темные; болты и гайки)",
            "Центровочные кольца — 20 евро/комплект (пластиковые и алюминиевые, всех размеров)",
            "Фланцы для дисков — 20-160 евро/комплект (универсальные и на заказ)",
            "Колпаки для дисков — 5-35 евро/шт. (различные варианты, на заказ)",
            "Вентили для дисков — 2.5-15 евро/шт. (короткие или длинные, резиновые или металлические, с хромированными колпачками)",
          ]}
          header="Товары"
        />
        <ServicesList
          listItems={[
            `Полный монтаж, железные диски 13"-16" — 50евро`,
            `Полный монтаж, железные диски 17"-18" — 55евро`,
            `Полный монтаж, железные диски 19" — 65 евро`,
            `Полный монтаж, литые диски 13"-14" — 50 евро`,
            `Полный монтаж, литые диски 15"-16" — 55 евро`,
            `Полный монтаж, литые диски 17"-18" — 65 евро,`,
            `Полный монтаж, литые диски 19" — 75 евро`,
            `Полный монтаж, литые диски 20"+ — 85-125 евро`,
          ]}
          header="Стоимость монтажа"
        />
        <p>
          Полный монтаж включает: замену резины, балансировку, снятие и
          установку на автомобиль.
        </p>
        <p>За монтаж шин RunFlat добавляется — 2,5 евро/шина.</p>
        <p>
          За монтаж шин на коммерческий транспорт/внедорожники добавляется — 15
          евро.
        </p>
        <p>
          Если клиент желает заменить или получить во время сезонной смены шин
          хранение без резервации времени мин. за 24 часа(просим резервировать
          время на монтаж и выдачу хранения хотябы за один день, чтобы не
          создавать перенагрузку склада) - доп. плата 10еур.
        </p>
        <ServicesList
          listItems={[
            `Установка шнура в шину — 10 евро`,
            `Установка заплатки на шину (стоимость монтажа добавляется) — 20-30 евро`,
            `Внутренний ремонт шин (стоимость заплатки не включена) — 25 евро/шт.`,
            `Балансировка колес — от 7,5 евро/шт.`,
            `Вентили — 2.5 евро/шт.`,
            `Замена вентилей — 10 евро`,
            `Хранение шин и дисков — 35 евро/сезон`,
            `Зашиповка шин, легковой автомобиль до 18" — 25 евро`,
            `Проклейка шин/дисков — 15-25 евро/комплект`,
            `Чистка дисков (шлифовка посадочного места диска) — 15 евро`,
            `Выпрямление дисков — от 35 евро/шт.`,
            `Покраска/восстановление дисков — от 200 евро/комплект`,
            `Мойка дисков — 25 евро/комплект`,
          ]}
          header="Прочие шинные работы"
        />
        <p>
          В нашем интернет-магазине Вы можете подобрать как новые, так и
          подержанные{" "}
          <a
            className="text-blue-700 font-bold"
            href="https://rattad24.ee/ru/rehvid/"
          >
            шины
          </a>{" "}
          для Вашего автомобиля. Для бронирования времени на шиномонтаж,
          обратитесь, пожалуйста, к нашему персоналу. Забронировать время на
          монтаж:Забронировать время!
        </p>
        <p>
          Цены на отдельные работы рассчитываются исходя из полной стоимости
          услуги, в соответствии с приведенной расценкой, или по
          договоренности. 
        </p>
        <p className="font-bold">
          NB! Rattad24 не отвечает за оставленные клиентами на территории
          представительства ценные вещи! В сезон шиномонтажа на выходных и вне
          рабочее время цена работ в 1.5 раза выше.
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <p>
          Rattad24 teostab rehvitöid, mis hõlmavad rehvide remonti. Rehvi
          remondi all peetakse silmas näiteks rehvi torke kõrvaldamist, milleks
          kasutatakse kummipaiku ja nööre. Rehvide remondil kasutatakse
          kaasaegseid tehnoloogiaid.
        </p>
        <p className="font-bold">
          Rehvide vahetamine on professionaalne käsitöö, mis suurendab teie
          turvatunnet, pikendab auto ja rehvide eluiga.
        </p>
        <p>
          Rattad24 teostab erinevaid rehvitöid. Rehvitööde hulka kuuluvad:
          rehvide paigaldus, tasakaalustamine, hoiustamine, velgede puhastamine,
          rehvide remont. Soovitame pärast paigaldust kontrollida polte 100 km
          järel.
        </p>
        <p className="font-bold">Tallinna töökoja hinnakiri</p>
        <ServicesList
          listItems={[
            "Velgede tasakaalustamise raskused — 5 eurot/100 g (mustad/valged raskused, kividega)",
            "Lukupoldid — 45-60 eurot/komplekt (erineva pikkusega, erineva keerme sammuga, tavalised ja tumedad; poldid ja mutrid)",
            "Tsentreerimisrõngad — 20 eurot/komplekt (plastikust ja alumiiniumist, kõikides suurustes)",
            "Distantsrõngad — 20-160 eurot/komplekt (universaalsed ja eritellimusel)",
            "Veljekapslid — 5-35 eurot/tk (erinevad variandid, eritellimusel)",
            "Ventilid — 2,5-15 eurot/tk (lühikesed või pikad, kummist või metallist, kroomitud korkidega)",
          ]}
          header="Kaubad"
        />
        <ServicesList
          listItems={[
            `Täispaigaldus, plekkveljed 13"-16" — 50 eurot`,
            `Täispaigaldus, plekkveljed 17"-18" — 55 eurot`,
            `Täispaigaldus, plekkveljed 19" — 65 eurot`,
            `Täispaigaldus, valuveljed 13"-14" — 50 eurot`,
            `Täispaigaldus, valuveljed 15"-16" — 55 eurot`,
            `Täispaigaldus, valuveljed 17"-18" — 65 eurot`,
            `Täispaigaldus, valuveljed 19" — 75 eurot`,
            `Täispaigaldus, valuveljed 20"+ — 85-125 eurot`,
          ]}
          header="Paigaldamise hind"
        />
        <p>
          Täispaigaldus sisaldab: rehvide vahetust, tasakaalustamist,
          eemaldamist ja autole tagasi paigaldamist.
        </p>
        <p>RunFlat rehvide paigaldus lisatasu — 2,5 eurot/rehv.</p>
        <p>Kaubiku/maasturi rehvide paigaldus lisatasu — 15 eurot.</p>
        <p>
          Kui klient soovib vahetada või saada hooajavahetusel hoiustamisteenust
          ilma aja broneerimiseta vähemalt 24 tundi ette (palume broneerida aeg
          paigaldamiseks ja hoiustamiseks vähemalt päev ette, et vältida lao
          ülekoormamist) - lisatasu 10 eurot.
        </p>
        <ServicesList
          listItems={[
            `Rehvi nööri paigaldamine — 10 eurot`,
            `Paikade paigaldamine rehvi (paigaldamise hind lisandub) — 20-30 eurot`,
            `Rehvide sisemine remont (paiga hind ei sisaldu) — 25 eurot/tk`,
            `Ratta tasakaalustamine — alates 7,5 eurot/tk`,
            `Ventilid — 2,5 eurot/tk`,
            `Ventili vahetus — 10 eurot`,
            `Rehvide ja velgede hoiustamine — 35 eurot/hooaeg`,
            `Rehvide naastutamine, sõiduauto kuni 18" — 25 eurot`,
            `Rehvide/velgede kleepimine — 15-25 eurot/komplekt`,
            `Velgede puhastamine (velje istmiku lihvimine) — 15 eurot`,
            `Velgede sirgestamine — alates 35 eurot/tk`,
            `Velgede värvimine/taastamine — alates 200 eurot/komplekt`,
            `Velgede pesemine — 25 eurot/komplekt`,
          ]}
          header="Muud rehvitööd"
        />
        <p>
          Meie e-poes saate valida nii uusi kui ka kasutatud
          <a
            className="text-blue-700 font-bold"
            href="https://rattad24.ee/ru/rehvid/"
          >
            rehve
          </a>{" "}
          oma autole. Rehvide paigaldamiseks aja broneerimiseks võtke palun
          ühendust meie personaliga. Broneerige aeg paigaldamiseks: Broneeri
          aeg!
        </p>
        <p>
          Üksiktööde hinnad arvutatakse täisteenuse hinna alusel vastavalt
          kehtestatud tariifidele või kokkuleppel.
        </p>
        <p className="font-bold">
          NB! Rattad24 ei vastuta esindusse jäetud klientide väärtuslike asjade
          eest! Rehvide paigaldamise hooajal nädalavahetustel ja töövälisel ajal
          on tööde hind 1,5 korda kõrgem.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <p>
          Rattad24 suorittaa rengastöitä, jotka sisältävät renkaiden korjauksen.
          Renkaan korjauksella tarkoitetaan esimerkiksi renkaan puhkeamisen
          korjaamista, jossa käytetään kumipaikkoja ja naruja. Renkaiden
          korjauksessa käytetään nykyaikaisia teknologioita.
        </p>
        <p className="font-bold">
          Renkaanvaihto on ammattimaista käsityötä, joka lisää
          turvallisuudentunnettasi, pidentää autosi ja renkaiden käyttöikää.
        </p>
        <p>
          Rattad24 suorittaa erilaisia rengastöitä. Rengastöihin kuuluu:
          renkaiden asennus, tasapainotus, varastointi, vanteiden puhdistus,
          renkaiden korjaus. Suosittelemme tarkistamaan pultit asennuksen
          jälkeen 100 km välein.
        </p>
        <p className="font-bold">Tallinnan työpajan hinnasto</p>
        <ServicesList
          listItems={[
            "Painot vanteisiin — 5 euroa/100 g (mustat/valkoiset painot, kivillä)",
            "Lukkomutterit — 45-60 euroa/sarja (eripituisia, erilaisilla kierteillä, tavallisia ja tummia; pultteja ja muttereita)",
            "Keskityskappaleet — 20 euroa/sarja (muovisia ja alumiinisia, kaikissa kooissa)",
            "Levikepalat — 20-160 euroa/sarja (yleismallisia ja tilauksesta valmistettuja)",
            "Vannekapselit — 5-35 euroa/kpl (erilaisia vaihtoehtoja, tilauksesta valmistettuja)",
            "Venttiilit — 2,5-15 euroa/kpl (lyhyitä tai pitkiä, kumisia tai metallisia, kromatuilla korkeilla)",
          ]}
          header="Tuotteet"
        />
        <ServicesList
          listItems={[
            `Täysi asennus, teräsvanteet 13"-16" — 50 euroa`,
            `Täysi asennus, teräsvanteet 17"-18" — 55 euroa`,
            `Täysi asennus, teräsvanteet 19" — 65 euroa`,
            `Täysi asennus, alumiinivanteet 13"-14" — 50 euroa`,
            `Täysi asennus, alumiinivanteet 15"-16" — 55 euroa`,
            `Täysi asennus, alumiinivanteet 17"-18" — 65 euroa`,
            `Täysi asennus, alumiinivanteet 19" — 75 euroa`,
            `Täysi asennus, alumiinivanteet 20"+ — 85-125 euroa`,
          ]}
          header="Asennuksen hinta"
        />
        <p>
          Täysi asennus sisältää: renkaiden vaihdon, tasapainotuksen, irrotuksen
          ja autoon takaisin asennuksen.
        </p>
        <p>RunFlat-renkaiden asennus lisämaksu — 2,5 euroa/rengas.</p>
        <p>Pakettiauton/maastoauton renkaiden asennus lisämaksu — 15 euroa.</p>
        <p>
          Jos asiakas haluaa vaihtaa tai saada kausivaihdon aikana
          varastointipalvelun ilman ajan varausta vähintään 24 tuntia etukäteen
          (pyydämme varaamaan ajan asennusta ja varastointia varten vähintään
          päivää etukäteen varaston ylikuormituksen välttämiseksi) - lisämaksu
          10 euroa.
        </p>
        <ServicesList
          listItems={[
            `Renkaan narun asentaminen — 10 euroa`,
            `Paikan asentaminen renkaaseen (asennushinta lisätään) — 20-30 euroa`,
            `Renkaiden sisäinen korjaus (paikan hinta ei sisälly) — 25 euroa/kpl`,
            `Renkaiden tasapainotus — alkaen 7,5 euroa/kpl`,
            `Venttiilit — 2,5 euroa/kpl`,
            `Venttiilin vaihto — 10 euroa`,
            `Renkaiden ja vanteiden varastointi — 35 euroa/kausi`,
            `Renkaiden nastoitus, henkilöauto enintään 18" — 25 euroa`,
            `Renkaiden/vanteiden liimaus — 15-25 euroa/sarja`,
            `Vanteiden puhdistus (vanteen istukan hionta) — 15 euroa`,
            `Vanteiden suoristus — alkaen 35 euroa/kpl`,
            `Vanteiden maalaus/kunnostus — alkaen 200 euroa/sarja`,
            `Vanteiden pesu — 25 euroa/sarja`,
          ]}
          header="Muut rengastyöt"
        />
        <p>
          Verkkokaupastamme voit valita uusia ja käytettyjä
          <a
            className="text-blue-700 font-bold"
            href="https://rattad24.ee/ru/rehvid/"
          >
            renkaita
          </a>{" "}
          autollesi. Rengasasennuksen ajan varaamiseksi ota yhteyttä
          henkilökuntaamme. Varaa aika asennukseen: Varaa aika!
        </p>
        <p>
          Yksittäisten töiden hinnat lasketaan kokonaispalvelun hinnan
          perusteella sovitun hinnaston mukaisesti tai sopimuksen mukaan.
        </p>
        <p className="font-bold">
          HUOM! Rattad24 ei vastaa asiakkaiden toimipisteeseen jättämistä
          arvoesineistä! Rengasasennuksen sesonkina viikonloppuisin ja työajan
          ulkopuolella työmäärän hinta on 1,5-kertainen.
        </p>
      </div>
    ),
    img: tireWorks,
  },
  {
    titleRus: "Работа с дисками",
    titleEst: "Tööd velgedega",
    titleFin: "Vanteiden työ",
    descriptionRus:
      "Полный спектр услуг по ремонту, покраске и полировке дисков в Rattad24: качество, индивидуальный подход и гарантия на все работы",
    descriptionEst:
      "Täielik valik teenuseid velgede remondi, värvimise ja poleerimise alal Rattad24-s: kvaliteet, individuaalne lähenemine ja garantii kõikidele töödele",
    descriptionFin:
      "Laaja palveluvalikoima vanteiden korjaukseen, maalaukseen ja kiillotukseen Rattad24 ä: laatu, yksilöllinen lähestymistapa ja takuu kaikille töille",
    additionalDescriptionRus: (
      <div className="py-4">
        <ServicesList
          listItems={[
            "Исправление геометрии: устранение вмятин, трещин и других повреждений.",
            "Восстановление после деформации: выправление дисков после ударов и наездов на бордюры.",
            "Сварка и реставрация: восстановление целостности и структурной прочности дисков.",
          ]}
          header="Ремонт дисков"
        />
        <ServicesList
          listItems={[
            "Порошковая покраска: долговечное и стойкое покрытие, защищающее диск от коррозии и внешних повреждений.",
            "Лакировка: нанесение прозрачного слоя для придания блеска и дополнительной защиты.",
            "Индивидуальный дизайн: возможность выбрать любой цвет и финишное покрытие по вашему желанию.",
          ]}
          header="Покраска дисков"
        />
        <ServicesList
          listItems={[
            "Восстановление блеска: снятие мелких царапин и потертостей, придание дискам зеркального блеска.",
            "Защита от коррозии: нанесение специальных покрытий для предотвращения ржавчины и окисления.",
          ]}
          header="Полировка дисков"
        />
        <ServicesList
          listItems={[
            "Профессиональная установка шин на диски с точной балансировкой для идеальной работы колес.",
            "Замена и утилизация шин: безопасная и экологичная замена старых шин на новые.",
          ]}
          header="Шиномонтаж и балансировка"
        />
        <ServicesList
          listItems={[
            "Проверка на дефекты: выявление скрытых повреждений, трещин и других опасных факторов.",
            "Контроль геометрии: измерение и восстановление заводских параметров дисков.",
          ]}
          header="Диагностика состояния дисков"
        />
        <ServicesList
          listItems={[
            "Опыт и профессионализм: наши мастера имеют многолетний опыт работы и готовы справиться с любыми задачами.",
            "Современное оборудование: используем передовые технологии для достижения наилучших результатов.",
            "Гарантия качества: на все выполненные работы предоставляется гарантия.",
            "Индивидуальный подход: учитываем все ваши пожелания и предлагаем оптимальные решения.",
          ]}
          header="Почему выбирают нас?"
        />
        <p className="mt-4">Свяжитесь с нами</p>
        <p className="mt-4">
          Готовы вернуть вашим дискам первозданный вид? Звоните нам или
          приезжайте в нашу мастерскую. Мы работаем для вас каждый день, чтобы
          обеспечить комфорт и безопасность на дороге.
        </p>
      </div>
    ),
    additionalDescriptionEst: (
      <div className="py-4">
        <ServicesList
          listItems={[
            "Geomeetria korrigeerimine: mõlkide, pragude ja muude kahjustuste kõrvaldamine.",
            "Deformatsiooni taastamine: velgede sirgestamine pärast lööke ja äärekividele sõitmist.",
            "Keevitus ja restaureerimine: velgede terviklikkuse ja struktuurse tugevuse taastamine.",
          ]}
          header="Velgede remont"
        />
        <ServicesList
          listItems={[
            "Pulbervärvimine: vastupidav ja püsiv kate, mis kaitseb velge korrosiooni ja väliste kahjustuste eest.",
            "Lakkimine: läbipaistva kihi kandmine, et anda läiget ja täiendavat kaitset.",
            "Individuaalne disain: võimalus valida soovitud värv ja lõppviimistlus vastavalt teie soovile.",
          ]}
          header="Velgede värvimine"
        />
        <ServicesList
          listItems={[
            "Läike taastamine: peenikeste kriimustuste ja kulumiste eemaldamine, velgedele peegelläike andmine.",
            "Kaitse korrosiooni eest: spetsiaalsete katete pealekandmine, et vältida roostet ja oksüdeerumist.",
          ]}
          header="Velgede poleerimine"
        />
        <ServicesList
          listItems={[
            "Professionaalne rehvide paigaldus velgedele koos täpse tasakaalustamisega, et saavutada rataste ideaalne töö.",
            "Rehvide vahetus ja utiliseerimine: ohutu ja keskkonnasõbralik vanade rehvide vahetus uute vastu.",
          ]}
          header="Rehvipaigaldus ja tasakaalustamine"
        />
        <ServicesList
          listItems={[
            "Defektide kontroll: varjatud kahjustuste, pragude ja muude ohtlike tegurite tuvastamine.",
            "Geomeetria kontroll: velgede tehaseparameetrite mõõtmine ja taastamine.",
          ]}
          header="Velgede seisukorra diagnostika"
        />
        <ServicesList
          listItems={[
            "Kogemus ja professionaalsus: meie meistrid omavad aastatepikkust kogemust ja on valmis lahendama kõik ülesanded.",
            "Kaasaegne varustus: kasutame tipptasemel tehnoloogiat parimate tulemuste saavutamiseks.",
            "Kvaliteedigarantii: kõigile tehtud töödele kehtib garantii.",
            "Individuaalne lähenemine: arvestame kõiki teie soove ja pakume optimaalseid lahendusi.",
          ]}
          header="Miks valida meid?"
        />
        <p className="mt-4">Võtke meiega ühendust</p>
        <p className="mt-4">
          Kas olete valmis oma velgedele algse välimuse tagasi andma? Helistage
          meile või tulge meie töökotta. Töötame iga päev, et tagada teile
          mugavus ja ohutus teel.
        </p>
      </div>
    ),
    additionalDescriptionFin: (
      <div className="py-4">
        <ServicesList
          listItems={[
            "Geometrian korjaus: lommojen, halkeamien ja muiden vaurioiden poistaminen.",
            "Deformaation palautus: vanteiden suoristus iskujen ja reunakiville ajamisen jälkeen.",
            "Hitsaus ja entisöinti: vanteiden eheyden ja rakenteellisen lujuuden palautus.",
          ]}
          header="Vanteiden korjaus"
        />
        <ServicesList
          listItems={[
            "Jauhemaalaus: kestävä ja pitkäikäinen pinnoite, joka suojaa vanteita korroosiolta ja ulkoisilta vaurioilta.",
            "Lakkaus: kirkkaan kerroksen levitys, joka lisää kiiltoa ja antaa lisäsuojaa.",
            "Yksilöllinen muotoilu: mahdollisuus valita mikä tahansa väri ja viimeistely toiveidesi mukaan.",
          ]}
          header="Vanteiden maalaus"
        />
        <ServicesList
          listItems={[
            "Kiillon palautus: pienten naarmujen ja kulumien poisto, vanteiden kiillotus peilimäiseksi.",
            "Korroosiosuojaus: erityisten pinnoitteiden levitys, joka estää ruostumista ja hapettumista.",
          ]}
          header="Vanteiden kiillotus"
        />
        <ServicesList
          listItems={[
            "Ammattimainen renkaiden asennus vanteille tarkalla tasapainotuksella täydellisen pyörätoiminnan saavuttamiseksi.",
            "Renkaiden vaihto ja kierrätys: turvallinen ja ympäristöystävällinen vanhojen renkaiden vaihto uusiin.",
          ]}
          header="Renkaiden asennus ja tasapainotus"
        />
        <ServicesList
          listItems={[
            "Vikojen tarkastus: piilevien vaurioiden, halkeamien ja muiden vaarallisten tekijöiden havaitseminen.",
            "Geometrian tarkistus: vanteiden tehtaalla asetettujen parametrien mittaus ja palautus.",
          ]}
          header="Vanteiden kunnon tarkastus"
        />
        <ServicesList
          listItems={[
            "Kokemus ja ammattitaito: mestareillamme on monen vuoden kokemus ja he ovat valmiita ratkaisemaan kaikki tehtävät.",
            "Nykyaikainen laitteisto: käytämme edistyksellistä teknologiaa parhaan lopputuloksen saavuttamiseksi.",
            "Laatutakuu: kaikille suoritetuille töille annetaan takuu.",
            "Yksilöllinen lähestymistapa: huomioimme kaikki toiveesi ja tarjoamme parhaat ratkaisut.",
          ]}
          header="Miksi valita meidät?"
        />
        <p className="mt-4">Ota meihin yhteyttä</p>
        <p className="mt-4">
          Oletko valmis palauttamaan vanteillesi alkuperäisen ulkonäön? Soita
          meille tai tule työpajaamme. Olemme valmiita auttamaan sinua joka
          päivä, jotta ajaminen olisi mukavaa ja turvallista.
        </p>
      </div>
    ),
    img: disk,
  },
];

export default smallScreenServicesArray;
