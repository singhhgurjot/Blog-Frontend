/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: moroplogo (https://sketchfab.com/moroplogo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wikipedia-logo-f2858651785a4aafbf6ecc042a3050b8
Title: wikipedia logo
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations, Environment, OrbitControls } from '@react-three/drei'
import { useEffect } from 'react'

export default function Model(props) {
    useEffect(()=>{
        actions.Animation.play();
    },[])
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("../public/wikipedia_logo/scene.gltf")
    const { actions } = useAnimations(animations, group)
    return (
        <>
       
        <Environment preset={"city"}></Environment>
        <group ref={group} {...props} dispose={null} layers={1}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={[0.08,0.08,0.08]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Letter_0404_Telugu_va_+_(i)_0" position={[-23.692, 9.9, -1.314]} rotation={[1.704, -0.389, 1.67]}>
                                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0405_Khmer_vo_+_i_1" position={[-20.072, 11.117, 11.633]} rotation={[2.99, -0.579, 1.936]}>
                                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0407_Katakana_u_+_small_i_2" position={[2.432, 16.729, 19.378]} rotation={[0.893, 0.353, -0.103]}>
                                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0408_Geez_We_3" position={[14.36, 17.896, 11.639]} rotation={[1.157, 0.685, -0.806]} scale={0.975}>
                                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0501_Javanese_Wa_+_i_4" position={[4.862, 7.338, -24.154]} rotation={[1.814, 0.295, -2.942]}>
                                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0502_Gujarati_va_5" position={[-9.245, 5.961, -23.239]} rotation={[1.879, 0.143, 2.775]}>
                                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0503_Gothic_vinja_6" position={[-20.648, 2.3, -15.136]} rotation={[1.745, 0.015, 2.205]}>
                                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0504_Latin_��-acute_7" position={[-25.587, 1.356, -2.018]} rotation={[1.548, -0.056, 1.646]}>
                                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0505_Bengali_short_u_8" position={[-21.566, 2.851, 13.714]} rotation={[1.539, -0.114, 1.001]} scale={[1.18, 1, 0.953]}>
                                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0506_Greek_Omega_9" position={[-10.291, 1.98, 23.484]} rotation={[1.413, 0.162, 0.42]} scale={[0.911, 0.911, 0.942]}>
                                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0507_Wikipedia_W_10" position={[5.176, 7.589, 24.01]} rotation={[1.327, 0.286, -0.211]} scale={0.967}>
                                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0508_Arabic_Waw_11" position={[19.281, 10.408, 13.47]} rotation={[1.067, 0.138, -0.866]}>
                                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0509_Gurmukh��_vava_+_sihari_12" position={[22.63, 11.631, -3.67]} rotation={[1.666, 0.458, -1.757]}>
                                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0510_Cyrillic_Ya_13" position={[16.677, 10.698, -16.393]} rotation={[1.785, 0.396, -2.363]}>
                                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0601_Syriac_Waw_14" position={[6.92, -1.442, -24.726]} rotation={[1.449, 0.219, -2.862]}>
                                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0602_Lontara_w_15" position={[-6.839, -3.873, -24.474]} rotation={[1.491, 0.265, 2.858]}>
                                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0603_Oriya_wa_+_i_16" position={[-18.835, -6.752, -16.217]} rotation={[1.529, 0.307, 2.266]}>
                                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0604_Burmese_v_+_i_17" position={[-23.929, -9.309, -1.789]} rotation={[1.595, 0.368, 1.631]}>
                                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0605_Devanagari_va_+_i_18" position={[-20.959, -7.55, 12.83]} rotation={[1.761, 0.229, 0.994]} scale={[0.959, 1, 1]}>
                                <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0606_Trad_Chinese_GungSeo_19" position={[-7.55, -9.279, 22.76]} rotation={[1.897, 0.199, 0.311]} scale={0.966}>
                                <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0607_Cyrillic_i_20" position={[9.977, -2.319, 23.599]} rotation={[1.757, 0.216, -0.407]} scale={[1.045, 0.932, 0.932]}>
                                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0608_Hangul_wi_21" position={[22.602, 0.81, 12.226]} rotation={[1.648, 0.083, -1.09]}>
                                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0609_Tana_vaavu_22" position={[25.004, 4.212, -4.225]} rotation={[1.676, 0.145, -1.757]}>
                                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0610_Laotian_w_+_i_23" position={[19.337, 0.964, -16.908]} rotation={[1.511, 0.106, -2.284]}>
                                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0701_Cyrillic_ve_24" position={[8.333, -9.371, -22.439]} rotation={[1.142, 0.09, -2.809]}>
                                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0702_Glagolitic_v��d��_25" position={[-3.624, -13.362, -21.666]} rotation={[1.077, 0.396, 2.992]}>
                                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0703_Malayalam_va_+_short_i_26" position={[-13.708, -16.193, -14.517]} rotation={[1.249, 0.663, 2.394]}>
                                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0704_Inuktitut_short_u_27" position={[-18.178, -18.05, -2.137]} rotation={[-1.487, -0.785, 1.546]}>
                                <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0705_Georgian_vin_28" position={[-15.527, -18.003, 9.777]} rotation={[2.071, 0.623, 0.835]} scale={[1, 1, 0.914]}>
                                <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0706_Kannada_va_+_i_29" position={[-4.361, -18.826, 16.951]} rotation={[2.318, 0.481, 0.192]}>
                                <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0707_Hebrew_vav_30" position={[10.885, -13.807, 18.752]} rotation={[2.193, -0.036, -0.436]} scale={[1.243, 1, 1]}>
                                <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0708_Thai_wo_waen_+_sara_i_31" position={[21.186, -10.542, 10.038]} rotation={[1.981, -0.261, -1.019]}>
                                <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0709_Latin_H_32" position={[24.766, -6.147, -3.169]} rotation={[-1.623, 0.238, -1.434]}>
                                <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0710_Cyrillic_u_33" position={[18.887, -8.094, -15.444]} rotation={[1.303, -0.188, -2.294]}>
                                <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0801_Tagalog_Wi_34" position={[8.687, -17.852, -16.331]} rotation={[0.735, 0.015, -2.795]}>
                                <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0802_Latin_U_35" position={[-0.411, -19.432, -16.823]} rotation={[0.727, 0.412, 3.119]}>
                                <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0803_Mongolian_wa_36" position={[-6.341, -22.317, -11.086]} rotation={[0.729, 0.807, 2.774]}>
                                <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0804_Limbu_wa_+_i_37" position={[-9.746, -23.612, -2.95]} rotation={[1.424, 1.172, 1.816]}>
                                <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0805_Cherokee_wi_38" position={[-7.619, -23.808, 6.012]} rotation={[-0.657, -0.904, 2.64]}>
                                <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0806_Tibetan_wa_+_i_39" position={[0.297, -23.293, 10.865]} rotation={[2.712, 0.461, -0.01]} scale={[1.292, 1.13, 1.13]}>
                                <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0807_Tamil_va_+_i_40" position={[10.341, -20.454, 11.645]} rotation={[2.577, -0.117, -0.415]}>
                                <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0808_Sinhala_va_+_i_41" position={[16.927, -18.335, 6.181]} rotation={[2.182, -0.592, -0.92]}>
                                <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0809_Latin_A_umlaut_42" position={[20.098, -15.803, -2.705]} rotation={[1.576, -0.671, -1.669]}>
                                <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0810_Classical_Chinese_43" position={[15.469, -16.818, -11.782]} rotation={[1.038, -0.502, -2.383]}>
                                <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0905_Tai_Le_wa_44" position={[-2.113, -25.619, -0.383]} rotation={[-2.903, -1.205, 0.238]}>
                                <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0906_Latin_V_45" position={[4.364, -25.111, 3.347]} rotation={[3.071, 0.322, -0.177]}>
                                <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_0907_Cyrillic_De_46" position={[10.861, -22.945, 4.039]} rotation={[2.097, -1.025, -0.947]}>
                                <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_1005_Greek_pi_47" position={[0.332, -24.569, -7.546]} rotation={[0.267, 1.162, -3.108]}>
                                <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_1006_Arabic_yodh_aleph_48" position={[7.586, -23.674, -6.544]} rotation={[0.333, -0.207, -2.834]}>
                                <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.letter} />
                            </group>
                            <group name="Letter_1007_Latin_I_dotted_49" position={[13.227, -21.651, -4.148]} rotation={[0.212, -0.057, -2.595]}>
                                <mesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials.letter} />
                            </group>
                            <group name="Shell_0305_50" position={[-16.917, 17.661, 7.535]}>
                                <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0404_51" position={[-23.425, 9.748, -1.151]}>
                                <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0405_52" position={[-19.81, 10.929, 11.459]}>
                                <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0407_53" position={[2.545, 16.354, 19.254]}>
                                <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0408_54" position={[13.975, 17.675, 11.509]}>
                                <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0501_55" position={[4.9, 7.402, -23.691]}>
                                <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0502_56" position={[-8.917, 5.787, -22.968]}>
                                <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0503_57" position={[-20.302, 2.268, -14.842]}>
                                <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0504_58" position={[-25.291, 1.174, -1.981]}>
                                <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0505_59" position={[-21.337, 2.791, 13.157]}>
                                <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0506_60" position={[-10.213, 1.994, 22.879]}>
                                <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0507_61" position={[5.028, 7.323, 23.641]}>
                                <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0508_62" position={[18.742, 10.181, 13.176]}>
                                <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0509_63" position={[22.255, 11.489, -3.425]}>
                                <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0510_64" position={[16.375, 10.485, -16.099]}>
                                <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0601_65" position={[6.846, -1.328, -24.261]}>
                                <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0602_66" position={[-6.748, -3.937, -24.145]}>
                                <mesh name="Object_136" geometry={nodes.Object_136.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0603_67" position={[-18.351, -6.671, -16.032]}>
                                <mesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0604_68" position={[-23.674, -9.061, -1.748]}>
                                <mesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0605_69" position={[-20.403, -7.396, 12.794]}>
                                <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0606_70" position={[-7.248, -9.113, 22.163]}>
                                <mesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0607_71" position={[9.891, -2.485, 22.956]}>
                                <mesh name="Object_146" geometry={nodes.Object_146.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0608_72" position={[22.061, 0.878, 12.102]}>
                                <mesh name="Object_148" geometry={nodes.Object_148.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0609_73" position={[24.642, 4.058, -3.803]}>
                                <mesh name="Object_150" geometry={nodes.Object_150.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0610_74" position={[18.959, 1.064, -16.552]}>
                                <mesh name="Object_152" geometry={nodes.Object_152.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0701_75" position={[8.21, -9.288, -22.031]}>
                                <mesh name="Object_154" geometry={nodes.Object_154.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0702_76" position={[-3.423, -13.205, -21.395]}>
                                <mesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0703_77" position={[-13.663, -15.936, -14.377]}>
                                <mesh name="Object_158" geometry={nodes.Object_158.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0704_78" position={[-17.938, -17.831, -2.031]}>
                                <mesh name="Object_160" geometry={nodes.Object_160.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0705_79" position={[-15.134, -17.729, 9.561]}>
                                <mesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0706_80" position={[-4.439, -18.354, 16.952]}>
                                <mesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0707_81" position={[10.47, -13.632, 18.387]}>
                                <mesh name="Object_166" geometry={nodes.Object_166.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0708_82" position={[20.847, -10.257, 10.103]}>
                                <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0709_83" position={[24.343, -6.189, -2.945]}>
                                <mesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0710_84" position={[18.652, -8.014, -15.237]}>
                                <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0801_85" position={[8.59, -17.705, -16.091]}>
                                <mesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0802_86" position={[-0.538, -19.256, -16.538]}>
                                <mesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0803_87" position={[-6.52, -22.073, -11.006]}>
                                <mesh name="Object_178" geometry={nodes.Object_178.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0804_88" position={[-9.606, -23.418, -2.845]}>
                                <mesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0805_89" position={[-7.446, -23.609, 6.129]}>
                                <mesh name="Object_182" geometry={nodes.Object_182.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0806_90" position={[0.299, -22.987, 10.799]}>
                                <mesh name="Object_184" geometry={nodes.Object_184.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0807_91" position={[10.224, -20.325, 11.502]}>
                                <mesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0808_92" position={[16.907, -18.062, 6.262]}>
                                <mesh name="Object_188" geometry={nodes.Object_188.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0809_93" position={[19.797, -15.711, -2.609]}>
                                <mesh name="Object_190" geometry={nodes.Object_190.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0810_94" position={[15.544, -16.593, -11.778]}>
                                <mesh name="Object_192" geometry={nodes.Object_192.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0905_95" position={[-2.128, -25.409, -0.269]}>
                                <mesh name="Object_194" geometry={nodes.Object_194.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0906_96" position={[4.298, -24.899, 3.228]}>
                                <mesh name="Object_196" geometry={nodes.Object_196.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_0907_97" position={[10.833, -22.693, 4.02]}>
                                <mesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_1005_98" position={[0.31, -24.27, -7.682]}>
                                <mesh name="Object_200" geometry={nodes.Object_200.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_1006_99" position={[7.421, -23.426, -6.495]}>
                                <mesh name="Object_202" geometry={nodes.Object_202.geometry} material={materials.Material} />
                            </group>
                            <group name="Shell_1007_100" position={[13.254, -21.433, -4.014]}>
                                <mesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials.Material} />
                            </group>
                            <group name="Letter_0305_Armenian_vev_101" position={[-16.925, 17.834, 7.506]} rotation={[0.873, -0.487, 0.85]}>
                                <mesh name="Object_206" geometry={nodes.Object_206.geometry} material={materials.letter} />
                            </group>
                            <group name="Empty_102" />
                        </group>
                    </group>
                </group>
            </group>
        </group>
        </>
    )
}
