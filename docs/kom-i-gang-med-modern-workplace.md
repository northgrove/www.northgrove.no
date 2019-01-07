# Kom i gang med en ny moderne digital arbeidsplass

Det kanskje viktigste å ha kontroll på i en ny moderne digital arbeidsplass er identen. De ansatte vil i større og større grad ønske å ta i bruk skytjenester og SaaS applikasjoner, og vi som administratorer vil ikke lenger klare å hindre dem i dette. Spill derfor heller på lag, og sørg for at de lett kan ta i bruk disse tjenestene ved å benytte firma-identen. Da vil samtidig firmaet få kontroll på tilgangen til dataene i tjeneneste. Både under og ikke minst etter et ansettelsesforhold. Når en ansatt slutter vil vedkomende automatisk miste tilgang til firmaets område på SaaS applikasjonene. Selv om de er hosted på internett og langt utenfor firmaets nettverk.

## Steg 1: Sett opp en Azure AD tenant.

For å sikre kontroll på identene også utenfor firmaets nettverk bør det etableres en Azure AD tenant for firmaet. Firmaets interne Active Directory med alle eksisterende brukeridenter kan så synkroniseres ut til Azure AD. Azure AD innstegslisens som er gratis, så dette er det ikke noen grun til å vente med å gjøre.

Så fort dette er gjort har du i det minste muligheten til å integrere en SaaS applikasjon om det skulle bli behov.

## Steg 2: Meld alle klientene inn i Azure AD

Har du allerede domene inmeldte klienter kan dette gjøres ved å sette opp hybrid joined maskiner. På den måten vil de være medlem både av det interne Active Directory'et og Azure AD. Og du vil med det kunne utnytte funksjonalitet fra begge steder.

Å melde maskinene inn i Azure AD er viktig for å oppnå en god Single sign-on opplevelse. Er maskinen medlem av Azure AD brukerne automatisk bli logget inn i tjenester som benytter Azure AD for autentisering. Dette oppleves smidig og enkelt for brukerne, og sikkerhetsavdelingen vil være godt fornøyd for den økte sikkerheten det gir. Vinn vinn der altså.