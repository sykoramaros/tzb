import React from "react"

const DataProtections = () => {
  return (
    <div className="container w-75 mt-5">
      <h1 className="mb-4">Ochrana osobních údajů – TZB</h1>

      <p>
        Společnost TZB se zavazuje chránit osobní údaje svých zákazníků v
        souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
      </p>

      <h3 className="mt-4">1. Správce osobních údajů</h3>
      <p>
        Správcem osobních údajů je TZB s.r.o., se sídlem Ulice 123, 100 00
        Praha, IČO: 12345678.
      </p>

      <h3 className="mt-4">2. Jaké údaje shromažďujeme</h3>
      <ul>
        <li>Jméno a příjmení</li>
        <li>Kontaktní údaje (e-mail, telefon)</li>
        <li>Fakturační a dodací adresa</li>
        <li>Historie objednávek a komunikace</li>
      </ul>

      <h3 className="mt-4">3. Účely zpracování</h3>
      <p>Vaše osobní údaje zpracováváme za účelem:</p>
      <ul>
        <li>vyřízení objednávek a smluvního vztahu,</li>
        <li>komunikace se zákazníkem,</li>
        <li>marketingových aktivit (na základě souhlasu),</li>
        <li>plnění zákonných povinností.</li>
      </ul>

      <h3 className="mt-4">4. Doba uchování údajů</h3>
      <p>
        Osobní údaje uchováváme pouze po dobu nezbytně nutnou pro splnění výše
        uvedených účelů, nebo podle platných právních předpisů.
      </p>

      <h3 className="mt-4">5. Práva subjektů údajů</h3>
      <p>Máte právo:</p>
      <ul>
        <li>na přístup ke svým údajům,</li>
        <li>na opravu nebo výmaz údajů,</li>
        <li>na omezení zpracování,</li>
        <li>na přenositelnost údajů,</li>
        <li>vznést námitku proti zpracování,</li>
        <li>podat stížnost u Úřadu pro ochranu osobních údajů.</li>
      </ul>

      <h3 className="mt-4">6. Kontakt</h3>
      <p>
        Pro uplatnění vašich práv nás kontaktujte na e-mailové adrese:{" "}
        <a href="mailto:gdpr@tzb.cz">gdpr@tzb.cz</a>
      </p>
    </div>
  )
}

export default DataProtections
