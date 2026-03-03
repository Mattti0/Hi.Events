<div align="center">

<img src="https://hievents-public.s3.us-west-1.amazonaws.com/website/github-banner.png?v=1" alt="Hi.Events - Avoimen lähdekoodin lipunmyyntialusta" width="100%">

# Hi.Events

### Avoimen lähdekoodin lipunmyynti- ja hallintapalvelu

Myy lippuja verkossa konferensseihin, yöelämän tapahtumiin, konsertteihin, työpajoihin ja festivaaleille.
Itse isännöity tai pilvipalvelu. Sinun tapahtumasi, sinun brändisi, sinun datasi.

[Kokeile pilvipalvelua →](https://app.hi.events/auth/register?utm_source=gh-readme) · [Live-demo](https://app.hi.events/event/2/hievents-conference-2030?utm_source=gh-readme) · [Dokumentaatio](https://hi.events/docs?utm_source=gh-readme) · [Verkkosivusto](https://hi.events?utm_source=gh-readme)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://github.com/HiEventsDev/Hi.Events/blob/develop/LICENCE)
[![GitHub Release](https://img.shields.io/github/v/release/HiEventsDev/hi.events?include_prereleases)](https://github.com/HiEventsDev/hi.events/releases)
[![Run Unit Tests](https://github.com/HiEventsDev/hi.events/actions/workflows/unit-tests.yml/badge.svg?event=push)](https://github.com/HiEventsDev/hi.events/actions/workflows/unit-tests.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/daveearley/hi.events-all-in-one)](https://hub.docker.com/r/daveearley/hi.events-all-in-one)

<a href="https://trendshift.io/repositories/10563" target="_blank">
  <img src="https://trendshift.io/api/badge/repositories/10563" alt="HiEventsDev%2Fhi.events | Trendshift" width="250" height="55"/>
</a>

<p>
<a href="README.md">English</a> · <a href="README.de.md">Deutsch</a> · <a href="README.pt.md">Português</a> · <a href="README.fr.md">Français</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.es.md">Español</a> · <a href="README.zh-cn.md">中文</a> · <a href="README.zh-hk.md">繁體中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.hu.md">Magyar</a> · <a href="README.pl.md">Polski</a> · <a href="README.fi.md">Suomi</a>
</p>

</div>

<br>

## Miksi Hi.Events?

Useimmat lipunmyyntialustat perivät maksun per lippu ja lukitsevat tietosi omaan ekosysteemiinsä. **Hi.Events on moderni, avoimen lähdekoodin vaihtoehto Eventbritelle, Tickettailorille, Dice.fm:lle ja muille alustoille** järjestäjille, jotka haluavat täyden hallinnan brändiin, ostoprosessiin, dataan ja infrastruktuuriin.

Suunniteltu promoottoreille, festivaalien järjestäjille, tapahtumapaikoille, yhteisöille ja konferenssi-isännille.

<br>

<img alt="Hi.Events Dashboard" src="https://hievents-public.s3.us-west-1.amazonaws.com/website/github-screenshot.png"/>

<br>

## Ominaisuudet

<table>
<tr>
<td width="50%" valign="top">

### 🎟️ Lipunmyynti

- Joustavat lipputyypit (ilmainen, maksullinen, lahjoitus, tasot)
- Piilotetut ja lukitut liput tarjouskoodeilla
- Tarjouskoodit ja ennakkomyynti
- Tuotelisäykset (oheistuotteet, päivitykset, lisäpalvelut)
- Tuotekategoriat järjestelyä varten
- Täysi vero- ja maksutuki (ALV, palvelumaksut)
- Kapasiteetin hallinta ja jaetut rajat

</td>
<td width="50%" valign="top">

### 🎨 Brändäys ja mukauttaminen

- Kaunis, konversio-optimoitu kassa
- Mukautettavat PDF-lippujen mallit
- Brändätty järjestäjän kotisivu
- Vedä ja pudota -tapahtumasivun rakennustyökalu
- Upotettava lippu-widget
- SEO-työkalut (metatagit, Open Graph)

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 👥 Osallistujien hallinta

- Mukautetut kysymykset kassalla
- Edistynyt haku, suodatus ja vienti (CSV/XLSX)
- Täydet ja osittaiset hyvitykset
- Joukkoviestit lipputyypin mukaan
- QR-koodi sisäänkirjautuminen lokitiedoilla
- Pääsyohjatut sisäänkirjautumislistat

</td>
<td width="50%" valign="top">

### 📊 Analytiikka ja kasvu

- Reaaliaikainen myynnin hallintapaneeli
- Kumppani- ja suositteluseuranta (Affiliate)
- Edistynyt raportointi (myynti, verot, tarjoukset)
- Webhookit (Zapier, Make, CRM-järjestelmät)

</td>
</tr>
<tr>
<td colspan="2" valign="top">

### ⚙️ Toiminnot

Monitasoiset käyttäjäroolit · Stripe Connect välittömät tilitykset · Offline-maksutavat · Tuki offline-tapahtumille · Automaattinen laskutus · Tapahtuma-arkisto · Monikielinen tuki · Täysi REST API

</td>
</tr>
</table>

<br>

## Vertailu

| Ominaisuus                       | Hi.Events | Eventbrite | Tickettailor | Dice    |
|:---------------------------------|:----------|:-----------|:-------------|:--------|
| Itse isännöitävissä              | ✅         | ❌          | ❌            | ❌       |
| Avoin lähdekoodi                 | ✅         | ❌          | ❌            | ❌       |
| Ei lippukohtaisia kuluja         | ✅         | ❌          | ❌            | ❌       |
| Täysi brändinhallinta            | ✅         | Rajoitettu | ✅            | Rajoitettu |
| Kumppaniseuranta                 | ✅         | ✅          | ❌            | ❌       |
| API-pääsy                        | ✅         | ✅          | ✅            | Rajoitettu |
| Omista oma datasi                | ✅         | ❌          | ❌            | ❌       |

<br>

## Pikastartti

### Docker

```bash
git clone git@github.com:HiEventsDev/hi.events.git
cd hi.events/docker/all-in-one

# Luo avaimet (Linux/macOS)
echo "APP_KEY=base64:$(openssl rand -base64 32)" >> .env
echo "JWT_SECRET=$(openssl rand -base64 32)" >> .env

docker compose up -d
```

Avaa `http://localhost:8123` ja luo tili.

📖 [Täysi asennusopas](https://hi.events/docs/getting-started?utm_source=gh-readme)

<br>

## Hi.Events Cloud

Etkö halua isännöidä itse? **[Hi.Events Cloud](https://app.hi.events/auth/register?utm_source=gh-readme)** on täysin hallinnoitu vaihtoehto ilman asennusta, automaattisilla päivityksillä ja ylläpidetyllä infrastruktuurilla.

[Aloita tästä →](https://app.hi.events/auth/register?utm_source=gh-readme)

<br>

## Osallistuminen

Toivotamme osallistumisen tervetulleeksi. Katso [osallistumisopas](CONTRIBUTING.md) lisätietoja varten.

<br>

## Tuki

📖 [Dokumentaatio](https://hi.events/docs?utm_source=gh-readme) · 📧 [hello@hi.events](mailto:hello@hi.events) ·
🐛 [GitHub-ongelmat](https://github.com/HiEventsDev/hi.events/issues)

<br>

## Lisenssi

Hi.Events on lisensoitu **AGPL-3.0-lisenssillä lisäehdoin**. Kaupallinen lisensointi saatavilla. [Lue lisää](https://hi.events/licensing).

<br>

<div align="center">

**[Verkkosivusto](https://hi.events)** · **[Dokumentaatio](https://hi.events/docs)** · **[Twitter/X](https://x.com/HiEventsTickets)**

Valmistettu ☘️ Irlannissa

</div>
