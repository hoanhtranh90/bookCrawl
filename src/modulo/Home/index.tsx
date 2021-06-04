import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Text, View, NativeModules, FlatList } from 'react-native'
import realm, {
    addBook,
    getAllBook,
    getAllChap
} from "../../database/Database";
import Modal from 'react-native-modal'
import axios from 'axios';
const Home = () => {
    const {CrawlDataModule} = NativeModules;
    let api = "http://192.168.1.208:8085/api/truyenfull/sau-khi-vo-be-trung-so"
    const [isLoading, setIsLoading] = useState(false);
    const [listChap, setListChap] = useState([]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios.get("http://192.168.1.208:8085/api/truyenfull/sau-khi-vo-be-trung-so")
    //         .then(res => {
    //             setListChap(res.data);

    //             //  res.data.map( async (element) => {
    //             //     console.log("---",element)
    //             //     await axios.get(element).then(res_ => {
    //             //         console.log("=>>",res_);

    //             //     })
    //             // });
    //             setIsLoading(false);
    //         })
    //         .catch(e => console.log(e))
    // }, [])
    const book = realm.objects("Book");
    console.log("=>>>",JSON.parse(JSON.stringify(book)))
    return (
        <View>
            <Text>Helo</Text>
            <Button
                title="click"
                onPress={ async () => {
                    let data_;
                    let listChap;
                    await CrawlDataModule.customMethod("https://truyenfull.vn/ga-cho-cuu-nguyen-soai-om-yeu-benh-tat", (data) => {
                    data_ = JSON.parse(data);
                    listChap = JSON.parse(data_.listChap);

                    // console.log('REALM PATH', Realm.defaultPath);
                  })
                  console.log(data_);
                  
                  addBook(data_.title, data_.totalChap,0,listChap)

            }}
            />
            <Button
                title="Log All book"
                onPress={ () => {          
                  console.log(getAllBook());

            }}
            />
            <FlatList
            data={getAllBook()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.title}</Text>
                    </View>
                )
            }} />
            <Modal
                isVisible={(isLoading) ? true : false}
            >
                <View style={{ padding: 15, borderRadius: 10, maxHeight: '50%', backgroundColor: '#fff', width: '60%', alignSelf: 'center' }}>
                    <Text
                        style={{
                            paddingVertical: 8,
                            textAlign: 'center',
                            fontSize: 20,
                            paddingBottom: 20,
                            fontWeight: 'bold',
                        }}
                    >
                        Thông tin
              </Text>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ActivityIndicator size="large" color="#000" />
                    </View>
                    <Text style={{ alignSelf: 'center', paddingVertical: 20 }}>Đang tải</Text>
                </View>
            </Modal>
        </View>
    )
}

export default Home;

