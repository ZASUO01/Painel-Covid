import {Page, Text, View, Document,  StyleSheet} from "@react-pdf/renderer";
import {format} from 'date-fns';

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#E4E4E4'
    },
    section: {
      width: '100%',
      margin: 10,
      padding: 10,
      borderBottom: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: '#9CA3AF'
    },
    generalData:{
      width: '100%',
      padding: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
    },
    countryList:{
      width: '100%',
      padding: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
    },
    tableHead:{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111827'
    },
    tableRow:{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#9CA3AF',
      marginTop: 5
    }
  });

  const PdfDocument = ({data}) => {
    const global = data.Global;
    const countries = data.Countries;

    const formatedDate = (date) => {
      const newDate = new Date(date);
      return format(newDate, 'dd/MM/yyyy');
    }

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={{fontSize: '25px', color:'#111827'}}>Painel covid</Text>
                    <Text style={{fontSize: '19px', color: '#6B7280'}}>Dados de {formatedDate(global.Date)}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={{fontSize: '19px', color: '#6B7280'}}>Estatísticas globais</Text>
                    <View style={styles.generalData}>
                        <Text style={{fontSize: '17px', color: '#6B7280', marginTop: 4}}>
                            Casos confirmados: {global.TotalConfirmed}
                        </Text>
                        <Text style={{fontSize: '17px', color: '#6B7280',marginTop: 4}}>
                            Novos casos: {global.NewConfirmed}
                        </Text>
                        <Text style={{fontSize: '17px', color: '#6B7280',marginTop: 4}}>
                            Recuperados: {global.TotalRecovered}
                        </Text>
                        <Text style={{fontSize: '17px', color: '#6B7280',marginTop: 4}}>
                            Novos recuperados: {global.NewRecovered}
                        </Text>
                        <Text style={{fontSize: '17px', color: '#6B7280',marginTop: 4}}>
                            Mortes: {global.TotalDeaths}
                        </Text>
                        <Text style={{fontSize: '17px', color: '#6B7280',marginTop: 4}}>
                            Novas mortes: {global.NewDeaths}
                        </Text>
                    </View>
                </View>
                <View style={styles.section}>
                  <Text style={{fontSize: '19px', color: '#6B7280'}}>Dados dos países</Text>
                  <View style={styles.countryList}>
                      <View style={styles.tableHead}>
                          <Text style={{color: '#F9FAFB', fontSize: '15px', width: '25%'}}>País</Text>
                          <Text style={{color: '#F9FAFB', fontSize: '15px', width: '25%'}}>Total de casos</Text>
                          <Text style={{color: '#F9FAFB', fontSize: '15px', width: '25%'}}>Total de mortes</Text>
                          <Text style={{color: '#F9FAFB', fontSize: '15px', width: '25%'}}>Recuperados</Text>
                      </View>
                      {countries.map(c => 
                        (<View key={c.ID} style={styles.tableRow}>
                          <Text style={{color: '#1F2937', fontSize: '15px', width: '25%'}}>{c.Country}</Text>
                          <Text style={{color: '#1F2937', fontSize: '15px', width: '25%'}}>{c.TotalConfirmed}</Text>
                          <Text style={{color: '#1F2937', fontSize: '15px', width: '25%'}}>{c.TotalDeaths}</Text>
                          <Text style={{color: '#1F2937', fontSize: '15px', width: '25%'}}>{c.TotalRecovered}</Text>
                        </View>)
                      )}
                  </View>
                </View>
            </Page>
        </Document>
    );
}

export default PdfDocument;