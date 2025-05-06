import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Carousel from "../../Components/Carousel/Carousel"
import LinkedTertiaryHeading from "../../Components/LinkedTertiaryHeading/LinkedTertiaryHeading"
import SubtitledArticle from "../../Components/SubtitledArticle/SubtitledArticle"
import TertiaryHeading from "../../Components/TertiaryHeading/TertiaryHeading"

const MobileWater = () => {
  const title = "Mobilní"
  const subtitle_1 = "Teplovodní"
  const linked_tertiary_delivery_heading = {
    title: "Dodání",
    link: "/delivery-conditions",
  }
  const linked_tertiary_rental_heading = {
    title: "Pronájem",
    link: "/rental-conditions",
  }
  const subtitle_standart = "Standart"
  const subtitle_delivery = "Dodávka"
  const subtitle_heating_section = "Topná část"
  const subtitle_fuel_section = "Palivová část"
  const subtitle_water_section = "Vodní část"
  const subtitle_electrical_section = "Elektrická část"
  const subtitle_container = "Kontejner"
  const subtitle_chimney = "Komín"
  const subtitle_extra = "Extra"
  const extra_subtitle_heating_section = "Topná část"
  const extra_subtitle_fuel_section = "Palivová část"
  const extra_subtitle_water_section = "Vodní část"
  const extra_subtitle_electrical_section = "Elektrická část"
  const extra_subtitle_container = "Kontejner"
  const extra_subtitle_chimney = "Komín"

  const pictures = [
    {
      src: `${process.env.PUBLIC_URL}/img/mobile_boiler_b_1920_1080.jpg`,
      text: "TEPLOVODNÍ KOTELNA 655 KW",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/mobile_boiler_e_1920_1080.jpg`,
      text: "TEPLOVODNÍ KOTELNA 2 x 1 000 KW",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/mobile_boiler_g_1920_1080.jpg`,
      text: "TEPLOVODNÍ KOTELNA 1 000 KW",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/mobile_boiler_f_1920_1080.jpg`,
      text: "TEPLOVODNÍ KOTELNA 1 200 KW – 2 ks",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/mobile_boiler_c_1920_1080.jpg`,
      text: "TEPLOVODNÍ KOTELNA 900 KW",
    },
  ]

  const base_info = [
    {
      subtitle: "Výhody",
      article: "řeší nedostatek místa – rychlá realizace a financování",
    },
    {
      subtitle: "Palivo",
      article: "zemní plyn, jiné plyny, extra lehký topný olej",
    },
    {
      subtitle: "Výkon",
      article: "0,5 – 12 MW",
    },
  ]

  const delivery = [
    {
      subtitle: "Komplexnost",
      article:
        "vybaveno kompletním parním funkčním zařízením, bezpečnostními prvky",
    },
    {
      subtitle: "Doklady",
      article: "certifikát, pasporty, návody k obsluze a údržbě",
    },
  ]

  const heating_section = [
    {
      subtitle: "Parametry",
      article:
        "max. pracovní tlak 5 bar, max. výst. teplota z kotlů 105 °C, tepelný spád 90/70°C",
    },
    {
      subtitle: "Kotel",
      article:
        "ocelový třítahový kotel s plně automatizovaným procesem hoření, účinnost 94 %, monoblokový regulace výkonu 40 – 100%",
    },
    {
      subtitle: "Zařízení",
      article:
        "ocelové kotle, kotlové čerpadlo, směšovací armatura, sekundární čerpadlo o výtlaku 10m, armatury, jeden topný okruh",
    },
    {
      subtitle: "Expanzní systém",
      article:
        "expanzní zařízení s vodním objemem 1m3 / 100 kW, bezpečnostní prvky",
    },
    {
      subtitle: "Termoizolace",
      article:
        "tepelná izolace veškerého zařízení (minerální vlna s povrchem z hliníkové fólie)",
    },
  ]

  const fuel_section = [
    {
      subtitle: "Palivo",
      article:
        "standard – zemní plyn, výhřevnost 33–34 MJ/m³, vstupní tlak max. 4 bary",
    },
    {
      subtitle: "Zařízení",
      article:
        "přívod plynu k hořáku, regulace tlaku plynu, havarijní uzávěr paliva, armatury",
    },
    {
      subtitle: "Emise GAS (OIL)",
      article: "NOx do 100 mg/m³, CO do 50 mg/m³",
    },
  ]

  const water_section = [
    {
      subtitle: "Zařízení",
      article:
        "změkčování vody, automatické dopouštění, max. provozní tlak vstupní vody 10 bar, min. tlak 4 bary",
    },
    {
      subtitle: "Měřidla",
      article: "vodoměr pro dopouštění vody",
    },
  ]

  const electrical_section = [
    {
      subtitle: "Parametry",
      article: "napětí 400 V (změny v rozmezí max. 10%), kmitočet 50 Hz",
    },
    {
      subtitle: "Vybavení",
      article: "kompletní elektroinstalace, osvětlení, větrání",
    },
    {
      subtitle: "Regulace",
      article:
        "regulace výkonu hořáku podle výstupního tlaku páry, hlídání hladiny, řízení napájení, odluhu, odkalu, hlášení havarijních stavů, automaticky se uzavírá havarijní uzávěr paliva",
    },
    {
      subtitle: "Řídicí systém",
      article:
        "hlavní řídící jednotka AMIT s dálkovou vizualizací a dálkovým sběrem dat na PC (teploty, tlaky, data z měřidel), řídící systém je programovatelný",
    },
    {
      subtitle: "GSM modul",
      article: "předání informací havarijních stavů pomocí GSM modulu",
    },
    {
      subtitle: "Obslužnost",
      article: "automatický provoz kotelny bez trvalé obsluhy",
    },
    {
      subtitle: "Měřidla",
      article: "elektroměr",
    },
  ]

  const container = [
    {
      subtitle: "Skladba",
      article:
        "tepelně izolovaný „sendvič“ (pozinkovaný plech, nehořlavá minerální vlna), šedá barva, ocelová nosná konstrukce, standard do prostředí -25 °C",
    },
    {
      subtitle: "Požární stav",
      article: "požární oboustranná odolnost max. 30 min",
    },
    {
      subtitle: "Větrání",
      article:
        "přívod spalovacího vzduchu do hořáků a odvod tepelné zátěže z kotelny",
    },
    {
      subtitle: "Klimatizace",
      article: "splitová klimatizační jednotka",
    },
  ]

  const chimney = [
    {
      subtitle: "Skladba",
      article:
        "6 m samonosný komín 3 složkový (nerezový plech, tepelná izolace z minerální vlny, nerezový plech), pomocí samonosné konstrukce je komín připevněn ke kontejneru",
    },
  ]

  const extra_heating_section = [
    {
      subtitle: "Vyšší tlak",
      article: "pracovní tlak nad 5 bar, vyšší teplota než 115 °C",
    },
    {
      subtitle: "Rezervní čerpadla",
      article:
        "kotlový okruh – rezervní čerpadlo bez montáže; kotlový okruh – rezervní čerpadlo včetně armatur a montáže; sekundární okruh – rezervní čerpadlo bez montáže; sekundární okruh – rezervní čerpadlo včetně armatur a montáže",
    },
    {
      subtitle: "Výtlak čerpadla",
      article: "sekundární čerpadlo o vyšším výtlaku než 10m",
    },
    {
      subtitle: "Měřidla",
      article: "měřič tepla",
    },
    {
      subtitle: "Tepelný spád",
      article: "jiný tepelný spád než 90/70°C",
    },
    {
      subtitle: "Výměník tepla",
      article:
        "výměník mezi kotelnou a sekundárním rozvodem tepla (ochrana kotelny)",
    },
    {
      subtitle: "Expanzní systém",
      article: "expanzní zařízení s větším vodním objemem než 1m³ / 100 kW",
    },
  ]

  const extra_fuel_section = [
    {
      subtitle: "Regulátor",
      article: "rezervní regulátor tlaku plynu",
    },
    {
      subtitle: "Měřidla",
      article: "plynoměr (přepočítavač plynu), olejoměr",
    },
    {
      subtitle: "Tlumič hluku",
      article:
        "hořákový tlumič hluku – používá se při instalaci kotelen v bytové zástavbě",
    },
  ]

  const extra_water_section = [
    {
      subtitle: "Zásobník vody",
      article:
        "zásobník studené vody pro tlakové doplňování vody čerpadlem do topného systému (používá se v případě nízkého nebo nestabilního tlaku vody)",
    },
    {
      subtitle: "Teplá voda",
      article:
        "zařízení pro přípravu teplé vody (TUV) podle max. hodinového výkonu + vodoměr",
    },
    {
      subtitle: "Měřidla",
      article: "měřič tepla pro ohřev TUV",
    },
  ]

  const extra_electro_section = [
    {
      subtitle: "Diesel generátor",
      article:
        "rezervní dieselový zdroj elektrické energie pro kotelnu včetně palivové nádrže",
    },
    {
      subtitle: "Kogenerace",
      article:
        "plynová MIKRO kogenerační jednotka pro výrobu části elektrické energie pro vlastní spotřebu kotelny (tzv. paralelní provoz kogenerace s elektrickou sítí s dokoupením elektřiny ze sítě)",
    },
  ]

  const extra_container_section = [
    {
      subtitle: "Arctic",
      article:
        "konstrukce kontejneru je vyrobena na teplotu venkovního vzduchu až -50 °C",
    },
    {
      subtitle: "Prodloužení",
      article:
        "při instalaci nadstandardních zařízení je nutno provést prodloužení nebo doplnění dalšího kontejneru",
    },
    {
      subtitle: "Větrání",
      article:
        "VZT větrací jednotka včetně filtrace vzduchu (např. pro písečné oblasti)",
    },
    {
      subtitle: "Klimatizace",
      article: "splitová klimatizační jednotka (pro horké oblasti)",
    },
    {
      subtitle: "Barva",
      article: "jiná barva než šedá",
    },
  ]

  const extra_chimney_section = [
    {
      subtitle: "Výška",
      article: "do 21 m (se samonosnou konstrukcí)",
    },
    {
      subtitle: "Tlumič hluku",
      article:
        "komínový tlumič hluku – používá se při instalaci kotelen v bytové zástavbě",
    },
  ]

  const extra_fuel_storage_section = [
    {
      subtitle: "Výkon do 940 kW",
      article: "sklad paliva 4 500 l v kotelně, dvouplášťové nádrže, armatury",
    },
    {
      subtitle: "Sklad paliva 12.000 litrů",
      article: "samostatný kontejner, dvouplášťové nádrže, armatury",
    },
  ]

  return (
    <>
      <div className="">
        <Title title={title} />
      </div>
      <div className="pb-1">
        <Subtitle subtitle={subtitle_1} />
      </div>
      <div
        className="mx-auto h-34 bg-light-gray"
        style={{ overflow: "hidden" }}
      >
        <Carousel picture={pictures} />
      </div>
      <div className="pt-2 pb-5">
        <LinkedTertiaryHeading
          title={linked_tertiary_delivery_heading.title}
          link={linked_tertiary_delivery_heading.link}
        />
      </div>
      <div className="container">
        <div className="mx-5 mt-4">
          {base_info.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="pb-1">
          <Subtitle subtitle={subtitle_standart} />
        </div>

        <div className="mx-4">
          <TertiaryHeading title={subtitle_delivery} />
        </div>

        <div className="mx-5 mt-4">
          {delivery.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={subtitle_heating_section} />
        </div>

        <div className="mx-5 mt-4">
          {heating_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={subtitle_fuel_section} />
        </div>

        <div className="mx-5 mt-4">
          {fuel_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={subtitle_water_section} />
        </div>

        <div className="mx-5 mt-4">
          {water_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={subtitle_electrical_section} />
        </div>

        <div className="mx-5 mt-4">
          {electrical_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={subtitle_container} />
        </div>

        <div className="mx-5 mt-4">
          {container.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={subtitle_chimney} />
        </div>

        <div className="mx-5 mt-4">
          {chimney.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="pb-1">
          <Subtitle subtitle={subtitle_extra} />
        </div>

        <div className="mx-4">
          <TertiaryHeading title={extra_subtitle_heating_section} />
        </div>
        <div className="mx-5 mt-4">
          {extra_heating_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={extra_subtitle_fuel_section} />
        </div>
        <div className="mx-5 mt-4">
          {extra_fuel_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={extra_subtitle_water_section} />
        </div>
        <div className="mx-5 mt-4">
          {extra_water_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={extra_subtitle_electrical_section} />
        </div>
        <div className="mx-5 mt-4">
          {extra_electro_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={extra_subtitle_container} />
        </div>
        <div className="mx-5 mt-4">
          {extra_container_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={extra_subtitle_chimney} />
        </div>
        <div className="mx-5 mt-4">
          {extra_chimney_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <TertiaryHeading title={extra_subtitle_fuel_section} />
        </div>
        <div className="mx-5 mt-4">
          {extra_fuel_storage_section.map((item, index) => (
            <SubtitledArticle
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="pt-2 pb-5">
          <LinkedTertiaryHeading
            title={linked_tertiary_rental_heading.title}
            link={linked_tertiary_rental_heading.link}
          />
        </div>
      </div>
    </>
  )
}

export default MobileWater
