import React from "react";
import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

export type MediaKitAssets = {
  pdfCover: string;
  cover: string;
  headshot: string;
  analytics7days: string;
  analyticsFollowers: string;
  analyticsTotalLikes: string;
  analyticsProfile: string;
  proof: [string, string, string, string];
};

type MediaKitDocumentProps = {
  assets: MediaKitAssets;
  email: string;
  tiktok: string;
  location: string;
};

const COLORS = {
  cream: "#F7F1E8",
  creamSoft: "#FBF8F3",
  taupe: "#E7DCCF",
  gold: "#B78958",
  charcoal: "#1F1C1A",
  muted: "#6A625A"
};

const COVER_WIDTH = 590;
const COVER_HEIGHT = 835;

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.cream,
    color: COLORS.charcoal,
    paddingHorizontal: 44,
    paddingVertical: 42,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.45
  },
  pageSoft: {
    backgroundColor: COLORS.creamSoft,
    color: COLORS.charcoal,
    paddingHorizontal: 44,
    paddingVertical: 42,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.45
  },
  coverExactPage: {
    backgroundColor: "#F7F1E8",
    padding: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  coverExactImage: {
    width: COVER_WIDTH,
    height: COVER_HEIGHT,
    objectFit: "contain"
  },
  coverPage: {
    backgroundColor: COLORS.cream,
    color: COLORS.charcoal,
    fontFamily: "Helvetica"
  },
  coverTopWrap: {
    position: "relative",
    height: 470
  },
  coverTopImage: {
    width: "100%",
    height: 470,
    objectFit: "cover"
  },
  coverFadeBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 210,
    backgroundColor: "rgba(247, 241, 232, 0.90)"
  },
  coverFadeRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "36%",
    height: 470,
    backgroundColor: "rgba(247, 241, 232, 0.60)"
  },
  coverFadeLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "6%",
    height: 470,
    backgroundColor: "rgba(247, 241, 232, 0.35)"
  },
  coverBody: {
    marginTop: -2,
    alignItems: "center",
    paddingHorizontal: 66
  },
  coverKicker: {
    color: COLORS.gold,
    fontSize: 11,
    letterSpacing: 2.4,
    textTransform: "uppercase",
    marginBottom: 22,
    textAlign: "center"
  },
  coverTitle: {
    color: COLORS.charcoal,
    fontSize: 84,
    fontFamily: "Times-Roman",
    lineHeight: 1.04,
    textAlign: "center"
  },
  coverSubtitle: {
    marginTop: 20,
    color: "#4A4641",
    fontSize: 14,
    lineHeight: 1.75,
    textAlign: "center"
  },
  goldLine: {
    width: 92,
    height: 1,
    backgroundColor: COLORS.gold,
    marginBottom: 14
  },
  sectionKicker: {
    textTransform: "uppercase",
    color: COLORS.gold,
    fontSize: 9,
    letterSpacing: 1.3,
    marginBottom: 8
  },
  title: {
    fontFamily: "Times-Roman",
    fontSize: 32,
    lineHeight: 1.1,
    marginBottom: 8
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 12,
    marginBottom: 18
  },
  twoCols: {
    display: "flex",
    flexDirection: "row",
    gap: 18
  },
  col: {
    flex: 1
  },
  card: {
    backgroundColor: "#FFFDF9",
    border: `1px solid ${COLORS.taupe}`,
    borderRadius: 8,
    padding: 12
  },
  cardTight: {
    backgroundColor: "#FFFDF9",
    border: `1px solid ${COLORS.taupe}`,
    borderRadius: 8,
    padding: 10
  },
  metricValue: {
    fontFamily: "Times-Roman",
    fontSize: 21,
    marginBottom: 3
  },
  metricLabel: {
    fontSize: 10,
    color: COLORS.muted,
    lineHeight: 1.35
  },
  imagePortrait: {
    width: "100%",
    height: 360,
    objectFit: "cover",
    borderRadius: 8
  },
  smallLabel: {
    fontSize: 9,
    color: COLORS.muted,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4
  },
  bodyText: {
    color: COLORS.muted,
    marginBottom: 10
  },
  bullet: {
    marginBottom: 7,
    color: COLORS.charcoal,
    fontSize: 11
  },
  miniGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  miniCard: {
    width: "48%",
    backgroundColor: "#FFFDF9",
    border: `1px solid ${COLORS.taupe}`,
    borderRadius: 8,
    padding: 9
  },
  miniCardTitle: {
    fontSize: 9,
    textTransform: "uppercase",
    color: COLORS.muted,
    marginBottom: 3
  },
  miniCardValue: {
    fontFamily: "Times-Roman",
    fontSize: 17
  },
  barWrap: {
    marginBottom: 10
  },
  barHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    color: COLORS.muted,
    fontSize: 10
  },
  barTrack: {
    height: 8,
    backgroundColor: "#EDE2D4",
    borderRadius: 999
  },
  barFill: {
    height: 8,
    backgroundColor: COLORS.gold,
    borderRadius: 999
  },
  analyticsGrid: {
    marginTop: 14,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  analyticsItem: {
    width: "48%",
    border: `1px solid ${COLORS.taupe}`,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#FFFDF9"
  },
  analyticsTitle: {
    fontSize: 9,
    color: COLORS.muted,
    textTransform: "uppercase",
    marginBottom: 5
  },
  analyticsImage: {
    width: "100%",
    height: 160,
    objectFit: "contain",
    borderRadius: 6
  },
  pillarCard: {
    border: `1px solid ${COLORS.taupe}`,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFFDF9",
    marginBottom: 8
  },
  pillarTitle: {
    fontFamily: "Times-Roman",
    fontSize: 16,
    marginBottom: 4
  },
  table: {
    border: `1px solid ${COLORS.taupe}`,
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 10
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#EFE4D7",
    borderBottom: `1px solid ${COLORS.taupe}`
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: `1px solid ${COLORS.taupe}`
  },
  tableCellHead: {
    flex: 2,
    padding: 8,
    fontSize: 10,
    color: COLORS.muted,
    textTransform: "uppercase"
  },
  tableCellHeadRight: {
    flex: 1,
    padding: 8,
    fontSize: 10,
    color: COLORS.muted,
    textTransform: "uppercase",
    textAlign: "right"
  },
  tableCell: {
    flex: 2,
    padding: 9,
    fontSize: 11
  },
  tableCellRight: {
    flex: 1,
    padding: 9,
    fontFamily: "Times-Roman",
    textAlign: "right",
    fontSize: 13
  },
  proofGrid: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  proofItem: {
    width: "48%",
    border: `1px solid ${COLORS.taupe}`,
    borderRadius: 8,
    padding: 7,
    backgroundColor: "#FFFDF9"
  },
  proofImage: {
    width: "100%",
    height: 215,
    objectFit: "cover",
    borderRadius: 6
  },
  proofCaption: {
    marginTop: 6,
    fontSize: 9.5,
    color: COLORS.charcoal,
    lineHeight: 1.35
  },
  contactWrap: {
    marginTop: 24,
    border: `1px solid ${COLORS.taupe}`,
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#FFFDF9"
  },
  contactItem: {
    marginBottom: 10,
    color: COLORS.muted,
    fontSize: 11
  },
  contactValue: {
    color: COLORS.charcoal,
    fontSize: 13,
    marginTop: 2
  }
});

function StatBar({ label, value, width }: { label: string; value: string; width: number }) {
  return (
    <View style={styles.barWrap}>
      <View style={styles.barHead}>
        <Text>{label}</Text>
        <Text>{value}</Text>
      </View>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${width}%` }]} />
      </View>
    </View>
  );
}

function SectionTitle({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <View>
      <Text style={styles.sectionKicker}>{kicker}</Text>
      <View style={styles.goldLine} />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

export function MediaKitDocument({ assets, email, tiktok, location }: MediaKitDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.coverExactPage}>
        <Image src={assets.pdfCover} style={styles.coverExactImage} />
      </Page>

      <Page size="A4" style={styles.pageSoft}>
        <SectionTitle
          kicker="About / Positioning"
          title="UGC con narrativa editorial y prueba social real"
          subtitle="Transformations + Latina beauty voice + affordable beauty + honest reviewer"
        />

        <View style={styles.twoCols}>
          <View style={styles.col}>
            <Image src={assets.headshot} style={styles.imagePortrait} />
          </View>
          <View style={styles.col}>
            <View style={styles.card}>
              <Text style={styles.smallLabel}>Creator</Text>
              <Text style={styles.bodyText}>
                Daypaez crea contenido UGC en cabello, maquillaje, skincare y lifestyle. Su posicionamiento combina transformación visual, educación práctica y credibilidad en cámara.
              </Text>
              <Text style={styles.bodyText}>
                Empezó hace 1 mes y ya valida crecimiento orgánico con señales claras de intención de compra en comentarios.
              </Text>
              <Text style={styles.smallLabel}>Goal</Text>
              <Text style={styles.bodyText}>Paid UGC + affiliate-heavy + monthly retainers + influencer growth.</Text>

              <Text style={styles.smallLabel}>Niche</Text>
              <Text style={styles.bodyText}>Hair & Beauty (cabello, maquillaje, skincare), lifestyle.</Text>

              <Text style={styles.smallLabel}>Key Facts</Text>
              <Text style={styles.bullet}>• Started 1 month ago</Text>
              <Text style={styles.bullet}>• Followers total: 817</Text>
              <Text style={styles.bullet}>• Net followers (28 days): 594</Text>
              <Text style={styles.bullet}>• For You traffic: 91.5%</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <SectionTitle
          kicker="Audience"
          title="Comunidad mayoritariamente femenina con perfil de compra"
          subtitle="Top countries: United States, Mexico, Colombia"
        />

        <View style={styles.twoCols}>
          <View style={styles.col}>
            <View style={styles.card}>
              <Text style={styles.smallLabel}>Demographics</Text>
              <StatBar label="Mujeres" value="~90%" width={90} />
              <StatBar label="Hombres" value="~10%" width={10} />

              <Text style={[styles.smallLabel, { marginTop: 10 }]}>Age Split</Text>
              <StatBar label="18–24" value="30%" width={30} />
              <StatBar label="25–34" value="50%" width={50} />
              <StatBar label="35–44" value="20%" width={20} />
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.card}>
              <Text style={styles.smallLabel}>Audience Notes</Text>
              <Text style={styles.bodyText}>
                La audiencia principal está en etapa de descubrimiento y compra: busca tono, fórmula, dónde comprar y tutoriales paso a paso.
              </Text>
              <Text style={styles.bodyText}>
                El perfil demográfico favorece categorías beauty con ticket accesible y frecuencia alta de consumo de contenido.
              </Text>
              <Text style={styles.bodyText}>
                En capturas internas puede variar entre 82% y 90% mujeres, manteniendo una mayoría femenina clara.
              </Text>
            </View>

            <View style={[styles.card, { marginTop: 10 }]}>
              <Text style={styles.smallLabel}>Top Countries</Text>
              <Text style={styles.bullet}>• United States</Text>
              <Text style={styles.bullet}>• Mexico</Text>
              <Text style={styles.bullet}>• Colombia</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.pageSoft}>
        <SectionTitle
          kicker="Performance"
          title="Tracción orgánica sólida en 7 días"
          subtitle="Views, engagement, traffic quality, and profile momentum"
        />

        <View style={styles.miniGrid}>
          <View style={styles.miniCard}>
            <Text style={styles.miniCardTitle}>Views last 7 days</Text>
            <Text style={styles.miniCardValue}>826K</Text>
          </View>
          <View style={styles.miniCard}>
            <Text style={styles.miniCardTitle}>Profile views</Text>
            <Text style={styles.miniCardValue}>13K</Text>
          </View>
          <View style={styles.miniCard}>
            <Text style={styles.miniCardTitle}>Likes / Comments / Shares</Text>
            <Text style={styles.miniCardValue}>26K / 321 / 1,417</Text>
          </View>
          <View style={styles.miniCard}>
            <Text style={styles.miniCardTitle}>Engagement rate (28 days)</Text>
            <Text style={styles.miniCardValue}>~4.04%</Text>
          </View>
        </View>

        <View style={styles.analyticsGrid}>
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsTitle}>Views 7 days</Text>
            <Image src={assets.analytics7days} style={styles.analyticsImage} />
          </View>
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsTitle}>Followers (28 days)</Text>
            <Image src={assets.analyticsFollowers} style={styles.analyticsImage} />
          </View>
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsTitle}>Likes (7 days)</Text>
            <Image src={assets.analyticsTotalLikes} style={styles.analyticsImage} />
          </View>
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsTitle}>Profile views</Text>
            <Image src={assets.analyticsProfile} style={styles.analyticsImage} />
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <SectionTitle
          kicker="Content Strategy"
          title="Pilares de contenido"
          subtitle="Before/After + tutorial paso a paso como formato base"
        />

        <View style={styles.pillarCard}>
          <Text style={styles.pillarTitle}>Transformaciones de color (cobriza/copper)</Text>
          <Text style={styles.bodyText}>Contenido de alto impacto visual para retención en los primeros segundos.</Text>
        </View>
        <View style={styles.pillarCard}>
          <Text style={styles.pillarTitle}>Tutoriales paso a paso (DIY)</Text>
          <Text style={styles.bodyText}>Estructura educativa para aumentar guardados, shares y comentarios de intención.</Text>
        </View>
        <View style={styles.pillarCard}>
          <Text style={styles.pillarTitle}>Soluciones accesibles + reseñas honestas</Text>
          <Text style={styles.bodyText}>Recomendaciones reales en lenguaje simple: hair, skincare y lash.</Text>
        </View>
        <View style={styles.pillarCard}>
          <Text style={styles.pillarTitle}>Updates post-uso (día 3 / día 7)</Text>
          <Text style={styles.bodyText}>Seguimiento para validar consistencia y fortalecer confianza de compra.</Text>
        </View>

        <View style={[styles.card, { marginTop: 10 }]}>
          <Text style={styles.smallLabel}>Content Mix (últimos 10 videos)</Text>
          <Text style={styles.bullet}>• 7 hair</Text>
          <Text style={styles.bullet}>• 1 skincare</Text>
          <Text style={styles.bullet}>• 1 lash</Text>
          <Text style={styles.bullet}>• Resto beauty/lifestyle</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.pageSoft}>
        <SectionTitle
          kicker="Services + Rate Card"
          title="Entregables UGC y tarifas base"
          subtitle="Precios en USD | Estructura para orgánico, ads y retainers"
        />

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCellHead}>UGC Deliverables</Text>
            <Text style={styles.tableCellHeadRight}>Rate</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1 video UGC (15–45s)</Text>
            <Text style={styles.tableCellRight}>$150</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1 video + 30 días ads</Text>
            <Text style={styles.tableCellRight}>$250</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Paquete 3 videos</Text>
            <Text style={styles.tableCellRight}>$400</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Raw footage (add-on)</Text>
            <Text style={styles.tableCellRight}>+$100</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>3 hook variations</Text>
            <Text style={styles.tableCellRight}>+$75</Text>
          </View>
        </View>

        <View style={[styles.card, { marginTop: 14 }]}>
          <Text style={styles.smallLabel}>Servicios incluidos</Text>
          <Text style={styles.bullet}>• UGC orgánico (15–45s)</Text>
          <Text style={styles.bullet}>• UGC para ads (direct response)</Text>
          <Text style={styles.bullet}>• Before/After</Text>
          <Text style={styles.bullet}>• Tutorial</Text>
          <Text style={styles.bullet}>• Hook variations</Text>
          <Text style={styles.bullet}>• Raw footage (add-on)</Text>
          <Text style={styles.bullet}>• Monthly packages</Text>
        </View>

        <View style={[styles.card, { marginTop: 10 }]}>
          <Text style={styles.smallLabel}>Notas</Text>
          <Text style={styles.bullet}>• Entrega: 3–5 días hábiles</Text>
          <Text style={styles.bullet}>• 1–2 revisiones incluidas</Text>
          <Text style={styles.bullet}>• Paid ads usage rights se cotiza por duración (30–180 días)</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <SectionTitle
          kicker="Proof of Conversion"
          title="Prueba de intención de compra"
          subtitle="Conversaciones de compra, consultas técnicas y solicitudes de paso a paso"
        />

        <View style={styles.proofGrid}>
          <View style={styles.proofItem}>
            <Image src={assets.proof[0]} style={styles.proofImage} />
            <Text style={styles.proofCaption}>Questions about color/brand → purchase intent</Text>
          </View>
          <View style={styles.proofItem}>
            <Image src={assets.proof[1]} style={styles.proofImage} />
            <Text style={styles.proofCaption}>Where to buy → high interest and action</Text>
          </View>
          <View style={styles.proofItem}>
            <Image src={assets.proof[2]} style={styles.proofImage} />
            <Text style={styles.proofCaption}>Technical questions (volume/peroxide) → qualified audience</Text>
          </View>
          <View style={styles.proofItem}>
            <Image src={assets.proof[3]} style={styles.proofImage} />
            <Text style={styles.proofCaption}>Requests for step-by-step → educational demand</Text>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.pageSoft}>
        <SectionTitle
          kicker="Contact"
          title="Disponible para colaboraciones"
          subtitle="Beauty brands, affiliate campaigns, and monthly UGC retainers"
        />

        <View style={styles.contactWrap}>
          <Text style={styles.smallLabel}>Creator</Text>
          <Text style={styles.contactValue}>Daypaez (@daypaez30)</Text>

          <Text style={[styles.smallLabel, { marginTop: 10 }]}>Email</Text>
          <Text style={styles.contactValue}>{email}</Text>

          <Text style={[styles.smallLabel, { marginTop: 10 }]}>TikTok</Text>
          <Text style={styles.contactValue}>{tiktok}</Text>

          <Text style={[styles.smallLabel, { marginTop: 10 }]}>Location</Text>
          <Text style={styles.contactValue}>{location}</Text>
        </View>

        <View style={[styles.card, { marginTop: 14 }]}>
          <Text style={styles.bodyText}>
            Para propuestas, enviar brief con: objetivo de campaña, producto, fecha de entrega, usage rights y formato de entregables.
          </Text>
          <Text style={styles.bodyText}>
            Respuesta con propuesta creativa, alcance de piezas, cronograma y estructura comercial.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
