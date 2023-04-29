import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from "../../../constants"
import { checkImageURL } from '../../../utils'
const Company = ({ companyLogo, jobTitle, companyName, location }) => {
console.log("HEllo comapny")
  return (
    <View>
      <View>
        <Image source={{ uri: checkImageURL(companyLogo) ? companyLogo : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LqVgQ66ZHzta2fMiEW8sJgHaE8%26pid%3DApi&f=1&ipt=297097010ac57d22df8e8aa08b6b9dc689e4f2453f389b8e511561a0a6ae00e3&ipo=images' }} style={styles.logoImage} />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>
          {companyName} /
        </Text>
        <View styles={styles.locationBox}>
          <Image source={icons.location} resizeMode='contain' style={styles.locationImage} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company