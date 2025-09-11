import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Jury = () => {

  const { language } = useLanguage()

  /* JURY MEMBERS */
  const jury = [
    {
      firstName: 'DÓRA',
      lastName: 'BALLA',
      image: 'Balla_D2.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Balla Dóra Ferenczy Noémi-díjas grafikusművész, habilitált egyetemi
docens. Hazai és nemzetközi kiállítások aktív résztvevője, szakmai
események, kiállítások szervezője. Elsődleges kutatási területe a kortárs
tervezőgrafika története és elmélete, a grafikai tervezés experimentális
vonatkozásai és határterületei. Saját kiadású, autonóm művészeti és
tipográfiai projekteken alapuló művészkönyvek és grafika szakelméleti
könyvek szerzője. Mint grafikus tervező, elsődlegesen a kulturális szféra
megrendelői számára dolgozik, kiemelten a könyv- és kiadványtervezés
területén. Az AGI (Alliance Graphique Internationale) tagja.`,
      description_en: `Dóra Balla is a graphic artist and recipient of the Noémi Ferenczy Award, as well as a habilitated university
associate professor. She is an active participant in domestic and international exhibitions and an organizer of professional
events and exhibitions. Her primary field of research is the
history and theory of contemporary graphic design, the experimental
aspects and border areas of graphic design. She is the author of self-published, autonomous art and
typography projects based on artist books and graphic design theory
books. As a graphic designer, he primarily works for clients in the cultural sphere,
 with a focus on book and publication design.
 He is a member of AGI (Alliance Graphique Internationale).`,
    },
    {
      firstName: 'OSZKÁR',
      lastName: 'BOSKOVITZ',
      image: 'Oszi2_static.webp',
      role_hu: 'tervezőgrafikus, tipográfus',
      role_en: 'graphic designer, typographer',
      description_hu: `A professzionális betűtervezésben és annak oktatásában látja a hazai
betűtervezés felélesztését. ,,Next’’ betűtípus sorozatával, elfeledett
magyar tervezők betűtípusait gondolja újra és teszi elérhetővé
folyamatosan. Oktat, témavezet művészeti egyetemeken mint: PTE MK,
METU, MKE, MOME. Betűtervezői munkáiért Magyar Tervezőgrafikai
Biennálé Díjat, Magyar Formatervezési Díjat, Pécs Innovációs Díjat és
Arany Rajzszög Díjat kapott.`,
      description_en: `In the field of professional type design and its teaching, I see the revival of Hungarian type design. With the "Next" typeface series, I think about and make forgotten Hungarian designers' typefaces available continuously. I teach and supervise at art universities such as PTE MK, METU, MKE, MOME. I have received awards for my type design work, including the Hungarian Graphic Design Biennale, Hungarian Form Design Award, Pécs Innovation Award, and Arany Rajzszög Award.`,
    },
    {
      firstName: 'GERGŐ',
      lastName: 'CUBA',
      image: 'Cuba_Gergo2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `15+ éve dolgozom szabadúszó tervezőgrafikusként, közel 5 éve egy brit
fintech platform kreatív vezetője vagyok. Munkám fókuszában az
arculattervezés és digitális megoldások mellett a tipográfia áll — könyvés
borítótervezőként is dolgozom, emellett tipográfiai workshopokat
tartok. A FontFront tipográfiai pályázat és kiállítás egyik újraalapítója és
főszervezője vagyok. Több mint 10 éve tanítok a felsőoktatásban; az
arculattervezés mellett többek között tipográfiát és kiadványszerkesztést
is. Munkáimat hazai és nemzetközi díjakkal ismerték el, köztük egy Red
Dot Design Awarddal.`,
      description_en: `I have been working as a freelance graphic designer for 15+ years, and for the past 5 years I have been the creative leader of a British fintech platform. My work focuses on branding and digital solutions, as well as typography — I also work as a book and cover designer, and I also teach typography and publication design. My work has been recognized with numerous awards, including a Red Dot Design Award.`,
    },
    {
      firstName: 'ANNA',
      lastName: 'FARKAS',
      image: 'Farkasanna2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Red Dot: Grand Prix-, Ferenczy Noémi-, valamint többszörös Red Dot
Winner-, Graphis-, CommArts-, TDC-, MFD- és Aranyrajszög-díjas
tervezőgrafikus. A Magyar Képzőművészeti Egyetem oktatója. Több mint
25 éve alapította saját stúdióját Anagraphic néven. Olyan tervezőgrafikai
munkák köthetők a nevéhez, mint az Anaptár, a Zeneakadémia arculata,
a Magvető, a Graphifest vagy a Szabó Magda 100 logói és elsősorban
kulturális intézményekkel, múzeumoknak dolgozik. Rendszeres
résztvevője hazai és nemzetközi tervezőgrafikai kiállításoknak.`,
      description_en: `Red Dot: Grand Prix, Noémi Ferenczy, and multiple Red Dot
Winner, Graphis, CommArts, TDC, MFD, and Aranyrajszög award-winning
graphic designer. Lecturer at the Hungarian University of Fine Arts. More than
25 years ago, she founded his own studio called Anagraphic. Her graphic design
work includes Anaptár, the image of the Academy of Music,
Magvető, Graphifest, and the 100 logos of Magda Szabó. She works primarily
with cultural institutions and museums. She is a regular
participant in domestic and international graphic design exhibitions.`,
    },

    {
      firstName: 'ZOLTÁN',
      lastName: 'HALASI',
      image: 'Halasi_Zoltan2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Ferenczy Noémi-díjas, többszörös Országos Tervezőgrafikai Biennálé és
Arany Rajzszög Díjas tervezőgrafikus, tipográfus. Szakterületei
a márkaépítés, termékarculat tervezés és az experimentális tipográfia.
Az Art Force Design kreatív igazgatója, a győri Széchenyi István Egyetem
Design Campusának docense, a Metropolitan Egyetem szaktanára,
a FontFront tipográfiai verseny alapítója.`,
      description_en: `Noémi Ferenczy Award winner, multiple National Graphic Design Biennial and
Golden Drawing Pin Award winner graphic designer and typographer. Her areas of expertise
include brand building, product image design, and experimental typography.
Creative director at Art Force Design, associate professor at the Design Campus of Széchenyi István University in Győr,
 lecturer at Metropolitan University,
founder of the FontFront typography competition.`,
    },
    {
      firstName: 'NÓRA',
      lastName: 'KASZANYI',
      image: 'kaszanyi_nora2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `World Brand Design Society & DNA Paris díjas, többszörös
ArtHungry-díjas tervezőgrafikus, 2020-ban elnyerte az Emberi
Erőforrások Minisztériumának fődíját a XXII. Tervezőgrafikai Biennálén.
Munkái több nemzetközi könyvben és magazinban is helyet kaptak,
úgy, mint a Novum, IdN, BranD, It's Nice That, Dieline magazin.
2018-ban szerezte meg mesterdiplomáját tervezőgrafika szakon
a Moholy-Nagy Művészeti Egyetemen, ahol diplomamunkáját ‘Rektori
Díjban’ részesítették. Jelenleg szabadúszó grafikusként dolgozik, főként
vizuális arculatok, kiadványok és csomagolások tervezésével foglalkozik.`,
      description_en: `World Brand Design Society & DNA Paris award winner, multiple
ArtHungry award-winning graphic designer, winner of the Ministry of Human
Resources' grand prize at the XXII. Graphic Design Biennial in 2020.
His works have been featured in several international books and magazines,
such as Novum, IdN, BranD, It's Nice That, and Dieline magazine.
In 2018, he obtained his master's degree in graphic design
from the Moholy-Nagy University of Art and Design, where his thesis was awarded the 'Rector's
Prize'. He currently works as a freelance graphic designer, mainly
designing visual identities, publications, and packaging.`,
    },
    {
      firstName: 'MATEUSZ',
      lastName: 'MACHALSKI',
      image: 'Machalski2_static.webp',
      role_hu: 'tervezőgrafikus, zsűrielnök',
      role_en: `graphic designer, chair of the jury`,
      description_hu: `Díjnyertes grafikusművész, munkássága fókuszában a tipográfia és
  a vizuális kommunikáció áll. A Varsói Képzőművészeti Akadémia
  professzora és rektor helyettese. Tervezői munkája mellett kutatásokban
  vesz részt, előadásokat tart, kiállítások kurátora és aktívan népszerűsíti
  a lengyel tervezőgrafikát nemzetközi színtéren.`,
      description_en: `An award-winning graphic artist, his work focuses on typography and
  visual communication. He is a professor and vice-rector at the Academy of Fine Arts in Warsaw
 . In addition to his design work, he is involved in research
 , gives lectures, curates exhibitions, and actively promotes
  Polish graphic design on the international stage.`,
    },
    {
      firstName: 'JÁNOS',
      lastName: 'KŐRÖS',
      image: 'Koros_Janos2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `2004-2009, Zirc, III. Béla Gimnázium, Művészeti Szakgimnázium és
Alapfokú Művészeti Iskola - gimnázium és grafikus (OKJ) szakma.
2009-2014, Sopron, Nyugat-Magyarországi Egyetem, Alkalmazott
Művészeti intézet, tervezőgrafikus BA és MA diploma. 2014-től
jelenleg - a Halisten Stúdió tagjaként tervezőgrafikusként dolgozom.`,
      description_en: `2004-2009, Zirc, III. Béla High School, Art High School and
Elementary Art School - high school and graphic designer (OKJ) profession.
2009-2014, Sopron, University of West Hungary, Institute of Applied
Arts, BA and MA degrees in graphic design. 2014-present
- I work as a graphic designer at Halisten Studio.`,
    },
    {
      firstName: 'DOROTTYA',
      lastName: 'NAGY',
      image: 'nagydorottya2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Alap- és mesterdiplomámat a Moholy-Nagy Művészeti Egyetem
tervezőgrafika szakán szereztem 2021-ben és 2025-ben. Szakmai
pályafutásomat 2019-ben kezdtem a Salt Communications-nél
tervezőgrafikusként. Az állandó szabadúszó grafikai tevékenység
mellett 2025-től a NUR&MOR csapatában dolgoztam, jelenleg pedig
a MOME-n tevékenykedem tervezőként. Az egyetemen Stefan Lengyel
Kiválósági Ösztöndíj és Best of Grafika díjazott voltam, 2021-ben Red-,
2023-ban pedig Green- és Különdíjat kaptam az RGB – Kreatív Design
Award-on. 2025-ben Scroll című munkám megjelent a Slanted
Experimental Type 2.0 című kiadványban.`,
      description_en: `I obtained my bachelor's and master's degrees from Moholy-Nagy University of Art and Design
in graphic design in 2021 and 2025. I began my professional
career in 2019 at Salt Communications
as a graphic designer. In addition to my permanent freelance graphic design work,
 I have been working with the NUR&MOR team since 2025, and I am currently
working as a designer at MOME. At university, I was awarded the Stefan Lengyel
Excellence Scholarship and Best of Graphics, and in 2021 I received the Red Award,
and in 2023 the Green Award and Special Award at the RGB – Creative Design
Award. In 2025, my work Scroll was published in Slanted
Experimental Type 2.0.`,
    },
    {
      firstName: 'LÁSZLÓ',
      lastName: 'NASKE',
      image: 'Naske_Laci2_static.webp',
      role_hu: 'betűtervező',
      role_en: 'graphic designer',
      description_hu: `Laci tervezőgrafikusként főként betűfókuszú arculatokat, logókat és
letteringeket készít, betűtervezőként pedig saját betűtervei mellett több
arculati betűtípust készített. Jelenleg a tervezés mellett betűtervezést
oktat a győri Széchenyi Egyetem Design Campusán, és workshopokon.`,
      description_en: `I obtained my bachelor's and master's degrees from Moholy-Nagy University of Art and Design
in graphic design in 2021 and 2025. I began my professional
career in 2019 at Salt Communications
as a graphic designer. In addition to my permanent freelance graphic design work,
 I have been working with the NUR&MOR team since 2025, and I am currently
working as a designer at MOME. At university, I was awarded the Stefan Lengyel
Excellence Scholarship and Best of Graphics, and in 2021 I received the Red Award,
and in 2023 the Green Award and Special Award at the RGB – Creative Design
Award. In 2025, my work Scroll was published in Slanted
Experimental Type 2.0.`,
    },
    {
      firstName: 'PÉTER',
      lastName: 'SERFŐZŐ',
      image: 'Sese2_static.webp',
      role_hu: 'brandstratéga',
      role_en: `brand strategist`,
      description_hu: `Gyermekkoromban kreatív környezetben nőttem fel. Szüleim
a szocializmus szűkös lehetőségeiben is keresték a megoldásokat. Kora
felnőttkoromra az igény a szép vizuális környezetre csak növekedett,
ezért sodródtam a tervezőgrafikai és tipográfiai pályára. Mára ez az igény
hitté erősödött, amely hit segít abban, hogy tegyek azért, ne csak
a legszűkebb környezetem vizuális kultúrája legyen rendben, hanem az
egyre távolabbi környezetemé is. Ezt szolgáljuk csapatommal
a zwoelfben, és ezért jött létre a brandguide is, hogy erre a változásra
még nagyobb hatásunk lehessen. Talán jó úton haladunk, de van még
mit tenni…`,
      description_en: `I grew up in a creative environment as a child. My parents
sought solutions even within the limited possibilities of socialism.
I reached adulthood, my desire for beautiful visual surroundings only grew,
which is why I drifted into a career in graphic design and typography. Today, this desire
has grown into a belief, which helps me to strive not only
for the visual culture of my immediate surroundings to be in order, but also
that of my increasingly distant surroundings. This is what my team and I strive for
at zwoelf, and this is why we created the brand guide, so that we can have an even greater impact on this change.
 We may be on the right track, but there is still
work to be done...`,
    },
    {
      firstName: 'JOSÉ',
      lastName: 'TÁBORI-SIMON',
      image: 'Jose3_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: `graphic designer`,
      description_hu: `Magyar Formatervezési Díjas, Arany Rajzszög Díjas, többszörös Országos
Tervezőgrafikai Biennálé Díjas tervezőgrafikus művész. Elsősorban
arculattervezéssel, brandépítéssel, csomagolástervezéssel és
kiadványtervezéssel foglalkozik 1999 óta. Számos kreatív kollektíva és
projekt fűződik a nevéhez; többek között a Grotesque Design, majd
később a Simon Says Grafikai Stúdió alapítója, az ArtHungry.com
közösségi művészeti platform és a Phenom.hu online popkulturális
magazin művészeti vezetője, valamint társalapítója a kortárs művészeti
eseményeknek helyet adó Bäse – Creatív Clubhouse-nak. A TypoHungry
– Tipográfia Magyarországon a XXI. században és STANC – Kreatív
magyar gasztrocsomagolások című művészeti albumok szerkesztője.`,
      description_en: `Hungarian Design Award winner, Golden Drawing Pin Award winner, multiple National
Graphic Design Biennial Award winner graphic designer. Since 1999, he has been primarily
involved in image design, brand building, packaging design, and
publication design. He has been involved in numerous creative collectives and
projects, including Grotesque Design, and
later founded Simon Says Graphic Studio, the ArtHungry.com
community art platform, and Phenom.hu online pop culture
magazine, as well as co-founder of Bäse – Creatív Clubhouse, a venue for contemporary art
events. He is the editor of the art albums TypoHungry
– Typography in Hungary in the 21st Century and STANC – Creative
Hungarian Gastronomic Packaging.`,
    },
    {
      firstName: 'SZABÓ',
      lastName: 'ANDREA',
      image: 'Szabo_Andrea2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Ferenczy Noémi-díjas grafikusművész, a Magyar Képzőművészeti
Egyetem adjunktusa. Az elmúlt közel két évtizedes kiállító és
tervezőgrafikusi tevékenysége számos hazai és nemzetközi elismerést,
díjat, valamint meghívást hozott számára. Alkotói munkásságát finoman
kimunkált könyvek, plakátok, kulturális arculatok, autonóm alkotások
jellemzik. 2022-ben a zsűri neki ítélte az utóbbi évek kiemelkedő
tervezőgrafikai tevékenységéért járó Aranyrajzszög díjat.`,
      description_en: `Noémi Ferenczy is an award-winning graphic artist and assistant professor at the Hungarian University of Fine Arts.
Her nearly two decades of experience as an exhibiting and graphic designer have earned her numerous domestic and international awards and invitations.
Her creative work is characterized by finely crafted books, posters, cultural images, and autonomous works.
awards, and invitations. Her creative work is characterized by
exquisitely crafted books, posters, cultural images, and autonomous works.
 In 2022, the jury awarded her the Aranyrajzszög Prize for her outstanding
work as a graphic designer in recent years.`,
    },
  ]

  /* CONFERENCE PRESENTATIONS */
  const conference = [
    {
      firstName: 'GÁL',
      lastName: 'KRISZTIÁN',
      image: 'Gal_Krisz4_static.webp',
      role_hu: 'képzőművész, tervezőgrafikus',
      role_en: `visual artistm graphic designer`,
      presentationTitle_hu: 'SOR- ÉS SZENTSÉGTÖRÉS',
      presentationTitle_en: 'Breaking the line and the code',
      presentationTime: '10:00',
      description_hu: `1998-ban alapította stúdióját. Számos arculat, zenei album és kulturális plakát
tervezője. Mellette készíti autonóm alkotásait, főként a kísérleti grafika és tipográfia,
kollázs területein. Felfogásában a konstruktív grafikai szemléletet ütközteti egy
szabadabb, expresszívebb grafikai világgal. Évek óta tanít a Budapesti Metropolitan
Egyetemen tervezőgrafikát, kísérleti grafikát. A Bükki Művésztelep és az Opla
művészeti projekt egyik alapítója. Aktív tagja a Magyar Plakát Társaságnak.
Rendszeresen szerepel hazai és nemzetközi kiállításokon, önálló kiállításain
általában tematikus sorozatait mutatja be.`,
      decription_en: `He founded his studio in 1998. He is the designer of numerous corporate identities, music albums and cultural posters. He also creates autonomous works, mainly in the fields of experimental graphics, typography and collage. In his approach, he contrasts the constructive graphic approach with a freer, more expressive graphic world. He has been teaching design graphics and experimental graphics at the Budapest Metropolitan University for years. He is one of the founders of the Bükki Artists' Colony and the Opla art project. He is an active member of the Hungarian Poster Society. He regularly participates in domestic and international exhibitions, and usually presents his thematic series in his solo exhibitions.`,
    },
    {
      firstName: 'PETRUCZ',
      lastName: 'ÁGNES',
      image: 'Petrucz_Agnes2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle_hu:
        'FOLYAMATOS BETŰK - SZABÁLYKÖVETÉS, VÁLTOZÁS ÉS ESETLEGESSÉG A GENERATÍV TIPOGRÁFIÁBAN',
      presentationTitle_en:
        'Flowy letters - Rules, changes and randomness in generative typography',
      presentationTime: '10:45',
      description_hu: `Munkássága az újmédia-művészet, adatvezérelt tervezés és kreatív kódolás metszéspontjában
helyezkedik el, különös hangsúlyt fektetve az adatvizualizáció és generatív
rendszerek esztétikai és konceptuális lehetőségeire. Elméleti és vizuáliskutatásai többek
között a dataizmus, a poszt-digitális kultúra, valamint az ember-gép közötti alternatív
interakciók témáit járják körül. Munkái megjelentek számos hazai és nemzetközi
kiállításon, többek között az Ars Electronica Fesztiválon (Linz, Ausztria), a London Design
Weeken, valamint Dél-Koreában, Indonéziában és Cipruson. Szakmai elismerései között
szerepel a Tipozóna hallgatói díj (2024), valamint a Moholy-Nagy Művészeti Egyetemen
kétszer elnyert Stefan Lengyel Kiválósági Ösztöndíj (2023/2024).`,
      description_en: `His work is situated at the intersection of new media art, data-driven design and creative coding, with a particular emphasis on the aesthetic and conceptual possibilities of data visualization and generative systems. His theoretical and visual research explores, among others, the themes of dataism, post-digital culture and alternative human-machine interactions. His work has been featured in numerous national and international exhibitions, including the Ars Electronica Festival (Linz, Austria), London Design Week, as well as in South Korea, Indonesia and Cyprus. His professional recognitions include the Tipozóna Student Award (2024) and the Stefan Lengyel Excellence Scholarship (2023/2024) awarded twice at the Moholy-Nagy University of Arts.`,
    },
    {
      firstName: 'POLGÁRDI',
      lastName: 'ÁKOS',
      image: 'Polgardi_jav_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle_hu: 'A KÖZLEKEDÉSI MÚZEUM BETŰCSALÁDJA',
      presentationTitle_en:
        'The Font Family of the Hungarian Museum of Science, Technology and Transport',
      presentationTime: '11:30',
      description_hu: `A SUBMACHINE tervezőgrafikai kollektíva egyik fele, a Magyar Könyvtervezés díj
alapítója. Soma és Léna édesapja, Zita férje.`,
      description_en: `One half of the graphic design collective SUBMACHINE, founder of the Hungarian Book Design Award. Father of Soma and Léna, husband of Zita.`,
    },
    {
      firstName: 'ANNA WIELUŃSKA - MATEUSZ MACHALSKI',
      lastName: '',
      image: 'Mateusz_Anna2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle:
        'CONNECTING THE DOTS. TYPOTEKA – A LENGYEL TIPOGRÁFIA TÖRTÉNETE',
      presentationTitle_en:
        'Connecting the Dots. Typoteca – The History of Polish Typography',
      presentationTime: '14:00',
      description_hu: `Anna Tipográfus, tervezőgrafikus és a Varsói Képzőművészeti Akadémia tanára. Munkája
főként a tipográfia és annak a vizuális kommunikációra gyakorolt szerepének vizsgálatára
irányul. Tervezői tevékenysége mellett előadásokat tart, és a lengyel tipográfia történetét
kutatja.
Mateusz díjnyertes grafikusművész, munkássága fókuszában a tipográfia és a vizuális
kommunikáció áll. A Varsói Képzőművészeti Akadémia professzora és rektor helyettese.
Tervezői munkája mellett kutatásokban vesz részt, előadásokat tart, kiállítások kurátora
és aktívan népszerűsíti a lengyel tervezőgrafikát nemzetközi színtéren.`,
      description_en: `Anna is a typographer, graphic designer and professor at the Academy of Fine Arts in Warsaw. Her work is mainly focused on examining typography and its role in visual communication. In addition to her design activities, she gives lectures and researches the history of Polish typography. Mateusz is an award-winning graphic artist, focusing on typography and visual communication. He is a professor and vice-rector at the Academy of Fine Arts in Warsaw. In addition to his design work, he is involved in research, lectures, curates exhibitions and actively promotes Polish graphic design on the international stage.`,
    },
    {
      firstName: 'UGLY BUT USELESS',
      lastName: '',
      image: 'UBU2_static.webp',
      role_hu: 'Asztalos Ádám, Batke Bendegúz',
      role_en: 'Ádám Asztalos, Bendegúz Batke',
      presentationTitle_hu: 'SORJA',
      presentationTitle_en: 'SORJA',
      presentationTime: '15:00',
      description_hu: `A fáramászás és a dunába való szikladobálás mellett a csúnya betűk iránti vonzalmunk
hozott össze minket a MOME mesterképzésén 2018-ban. Egyetem után különöző helyeken
dolgoztunk, 2024-ben pedig végérvényesen elköteleződtünk a rusnya betűk és az otromba
grafikák mellett. Munkáinkat a tipográfia felőli megközelítés határozza meg, legyen az akár
fesztivál branding, étterem arculat vagy csupán egy logó. A kommmunikációnk elengedhetetlen
összetevője az önirónia és a humor. Szóval ne lepődjön meg senki, ha a projektjeinket
vizsgálva az éktelen betűformák és förtelmes színek mellett, eddig ismeretlen
egérfajok neveivel vagy a kőolajiparban használt kifejezésekkel is találkozna!`,
      description_en: `Besides climbing trees and throwing rocks into the Danube, our love for ugly letters brought us together at MOME's master's program in 2018. After university, we worked in different places, and in 2024 we definitively committed ourselves to ugly letters and ugly graphics. Our work is defined by our approach to typography, whether it's festival branding, restaurant branding or just a logo. Self-irony and humor are essential components of our communication. So don't be surprised if, when examining our projects, you come across the names of previously unknown mouse species or terms used in the oil industry, in addition to the indecent letterforms and hideous colors!`,
    },
    {
      firstName: 'ESZTER',
      lastName: 'MISZTARKA',
      image: 'Misztarka_Eszter2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle_hu: 'DIGITÁLIS TIPOGRÁFIA',
      presentationTitle_en: 'DIGITAL TYPOGRAPHY',
      presentationTime: '15:45',
      description_hu: `A Képzőművészeti Egyetemen végzett díjnyertes szabadúszó tervezőgrafikus,
társalapítója a szintén díjnyertes Classmate Stúdiónak. Közel tíz évet töltött hazai kreatív
stúdiókban, ahol elsősorban elegáns és minimalista arculati projekteken, csomagolás- és
kiadványtervezésen dolgozott. Elhivatottja a koncepcionális és strukturális tervezésnek, de
nem mond nemet a kísérleti grafikára és a véletlenek folyamán kialakuló grafikai elemekre
sem, hiszen szerinte ezek teszik igazán színessé és izgalmassá ezt a szakmát. Az évek
során munkái számos díjat nyertek: Red Dot Design Award, Indigo Design Award, RGB
Kreatív Design Díj és Aranyrajzszög Díj – Év grafikai Stúdiója kategória
(Classmate Studio).`,
      description_en: `An award-winning freelance graphic designer graduated from the University of Fine Arts and is the co-founder of the award-winning Classmate Studio. He spent nearly ten years in Hungarian creative studios, where he primarily worked on elegant and minimalistic identity projects, packaging and publication design. He is dedicated to conceptual and structural design, but he does not say no to experimental graphics and graphic elements that emerge through coincidences, as he believes that these are what make this profession truly colorful and exciting. Over the years, his works have won numerous awards: Red Dot Design Award, Indigo Design Award, RGB Creative Design Award and Aranyrajzszög Award – Graphic Studio of the Year category (Classmate Studio).`,
    },
    {
      firstName: 'REBEKA',
      lastName: 'OROSZ',
      image: 'Rebeka_Orosz2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle_hu: 'RECYCLING, REVIVING',
      presentationTitle_en: 'RECYCLING, REVIVING',
      presentationTime: '16:30',
      description_hu: `Orosz Rebeka tervezőgrafikus, tipográfus, okleves betűtervező. A Soproni Egyetem
Tervezőgrafika szakán végezte az alapképzést 2019-ben, majd a Moholy-Nagy Művészeti
Egyetem tervezőgrafika szakán szerezte meg a mesterképesítést 2022-ben.
A mesterképzés alatt és azt követően főleg arculattervezés területén szerzett jelentős
tapasztalatokat. A betűtervezés az alapszak óta foglalkoztatta, végül az elmúlt évben
jelentkezett a hágai Royal Academy of Art (KABK) TypeMedia nevű mesterképzésére, ahol
idén átvette a betűtervező diplomáját. Jelenleg szabadúszóként dolgozik.`,
      description_en: `Rebeka Orosz is a graphic designer, typographer, and certified type designer. She completed her bachelor's degree in Graphic Design at the University of Sopron in 2019, and then her master's degree in Graphic Design at the Moholy-Nagy University of Arts in 2022. During and after her master's degree, she gained significant experience, mainly in the field of corporate identity design. Type design has been her passion since her undergraduate studies, and last year she applied for the TypeMedia master's degree at the Royal Academy of Art (KABK) in The Hague, where she received her diploma in type design this year. She currently works as a freelancer.`,
    },
  ]

  return (
    <section id="jury" className="py-0" style={{ backgroundColor: '#004bff' }}>
      <div className="w-full">
        {/* Two Column Layout - Each column has photo-text pairs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="space-y-0">
            {/* Section Title */}
            <div
              className="w-full flex items-center justify-center"
              style={{ height: '25vw', backgroundColor: '#004bff' }}
            >
              <h2
                className="font-bold text-white uppercase tracking-wide"
                style={{
                  fontFamily: 'Big Shoulders Display, sans-serif',
                  fontSize: 'clamp(4rem, 12vw, 20rem)',
                }}
              >
                ZSŰRI
              </h2>
            </div>

            {/*  Left Column */}
            {jury.slice(0, 6).map((member, index) => (
              <div key={index} className="relative group flex">
                <PhotoOfTile
                  image={member.image}
                  firstName={member.firstName}
                  lastName={member.lastName}
                />
                <TextOfTile
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role={
                    language === 'hu'
                      ? member.role_hu
                      : member.role_en
                  }
                  description={
                    language === 'hu'
                      ? member.description_hu
                      : member.description_en
                  }
                />
                <HoverOverlay
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role={
                    language === 'hu'
                      ? member.role_hu
                      : member.role_en
                  }
                  description={
                    language === 'hu'
                      ? member.description_hu
                      : member.description_en
                  }
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {jury.slice(6).map((member, index) => (
              <div key={index} className="relative group flex">
                <PhotoOfTile
                  image={member.image}
                  firstName={member.firstName}
                  lastName={member.lastName}
                />
                <TextOfTile
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role={
                    language === 'hu'
                      ? member.role_hu
                      : member.role_en
                  }
                  description={
                    language === 'hu'
                      ? member.description_hu
                      : member.description_en
                  }
                />
                <HoverOverlay
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role={
                    language === 'hu'
                      ? member.role_hu
                      : member.role_en
                  }
                  description={
                    language === 'hu'
                      ? member.description_hu
                      : member.description_en
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* PHOTO OF TILE */
const PhotoOfTile = ({ image, firstName, lastName }) => {
  const { language } = useLanguage()
  return (
    <div className="w-1/2 aspect-square overflow-hidden">
      <img
        src={`/images/${image}`}
        alt={
          language === 'hu'
            ? `${lastName} ${firstName}`
            : `${firstName} ${lastName}`
        }
        className="w-full h-full object-cover"
      />
    </div>
  )
}

/* TEXT OF TILE */
const TextOfTile = ({ firstName, lastName, role, description }) => {
  const { language } = useLanguage()
  return (
    <div
      className="w-1/2  flex flex-col justify-top p-6 aspect-square"
      style={{ backgroundColor: '#004bff' }}
    >
      <h3
        className="text-white text-lg md:text-xl xl:text-4xl font-semibold uppercase tracking-wide mb-2"
        style={{ fontFamily: 'Geist, sans-serif' }}
      >
        {language === 'HU' ? (
          <>
            {lastName}
            <br />
            {firstName}
          </>
        ) : (
          <>
            {firstName}
            <br />
            {lastName}
          </>
        )}
      </h3>
      <p
        className="text-white text-lg md:text-2xl font-normal mb-0"
        style={{
          fontFamily: 'Geist, sans-serif',
          color: '#00caff',
        }}
      >
        {role}
      </p>
      {/* Decorative lines */}
      <img
        src="/lines-button.svg"
        alt="Decorative lines"
        className="w-16 h-16"
      />
    </div>
  )
}

/* HOVER OVERLAY */
const HoverOverlay = ({ firstName, lastName, role, description }) => {
  const { language } = useLanguage()
  return (
    <div
      className="absolute inset-0 flex flex-col justify-top px-8 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ backgroundColor: '#ff5251' }}
    >
      <h3
        className="text-white text-xl md:text-4xl font-semibold uppercase tracking-wide mb-3"
        style={{ fontFamily: 'Geist, sans-serif' }}
      >
        {language === 'HU' ? (
          <>
            {lastName} {firstName}
          </>
        ) : (
          <>
            {firstName} {lastName}
          </>
        )}
      </h3>

      <p
        className="text-white text-lg font-normal leading-tight"
        style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 'clamp(1.125rem, 1.35rem, 1.75rem)',
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default Jury
