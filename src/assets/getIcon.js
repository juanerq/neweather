const URL = 'https://res.cloudinary.com/dehmscseb/image/upload/v1653947327'

export const day = {
  113: '113_zjbpo0',
  116: '116_kbhdal',
  119: '119_gkpndh', 
  122: '122_xgfwjv', 
  143: '143_zn56oc', 
  176: '176_tujsno', 
  179: '179_owkj65', 
  182: '182_tinscf', 
  185: '185_c912yj', 
  200: '200_xkft9r', 
  227: '227_rqaber', 
  230: '230_jowp5q', 
  248: '248_gvjvah', 
  260: '260_wwh8yl', 
  263: '263_r1defx', 
  266: '266_k2de7f', 
  281: '281_bn1wtf', 
  284: '284_kf2fpj', 
  293: '293_qh1zxf', 
  296: '296_e6gmuk', 
  299: '299_xdoxrn', 
  302: '302_qzji3i', 
  305: '305_j413ta', 
  308: '308_fqeg0j', 
  311: '311_dbuk6e', 
  314: '314_s11pv0', 
  317: '317_bbcjwg', 
  320: '320_purp6s', 
  323: '323_kto0mn', 
  326: '326_sqnklr', 
  329: '329_eejh23', 
  332: '332_w3npof', 
  335: '335_hofuzz', 
  338: '338_wyiumn', 
  350: '350_kp8fa0', 
  353: '353_kme02k', 
  356: '356_vb7g1u', 
  359: '359_lqph4u', 
  362: '362_b1xgbl', 
  365: '365_ndmxb6', 
  368: '368_vbnccd', 
  371: '371_kuuwrm', 
  374: '374_ogiz5i', 
  377: '377_d7lx3g', 
  386: '386_ltgkqh', 
  389: '389_bswjfh', 
  392: '392_fsblj5',
  395: '395_dwsri5'
}

export const night = {
  113: '113_c84myv',
  116: '116_fb5ip3',
  119: '119_ku9gdh', 
  122: '122_yw6qri', 
  143: '143_iiina4', 
  176: '176_escmfe', 
  179: '179_kdbkkj', 
  182: '182_tpninu', 
  185: '185_r2c72q', 
  200: '200_eztdd6', 
  227: '227_gfxrfl', 
  230: '230_jyzzkp', 
  248: '248_mgji9j', 
  260: '260_cgczqd', 
  263: '263_c1ijns', 
  266: '266_gftbwu', 
  281: '281_gjll9n', 
  284: '284_w55suo', 
  293: '293_sc806x', 
  296: '296_nxpkrl', 
  299: '299_icirfy', 
  302: '302_lqh1h0', 
  305: '305_xxs1ug', 
  308: '308_gt5l53', 
  311: '311_zqcbq5', 
  314: '314_ms59mq', 
  317: '317_hk0fsy', 
  320: '320_av0zyw', 
  323: '323_fhwcnj', 
  326: '326_kvzfq4', 
  329: '329_gnp5sb', 
  332: '332_ojm6ho', 
  335: '335_h0vqvv', 
  338: '338_vqiguy', 
  350: '350_dajgcr', 
  353: '353_sozak3', 
  356: '356_bgh3hr', 
  359: '359_n4d7ae', 
  362: '362_lge7fe', 
  365: '365_a8j7th', 
  368: '368_p9ea6u', 
  371: '371_nsqftv', 
  374: '374_e0vxgf', 
  377: '377_okehz3', 
  386: '386_rybmdi', 
  389: '389_mhkmv3', 
  392: '392_xub4oa',
  395: '395_wbdylj'
}


export const getImgInfoFromUrl = (url) => {
  const [ type, codeImg ] = url.split('/').splice(-2)
  const code = codeImg.substring(0, 3)

  return getIcon(code, type) || url 
}

const getIcon = (code, type = 'day') => {
  if (type === 'day' || type === 'night') {
    const nameImg = type === 'day' ? day[code] : night[code]

    return nameImg ? `${URL}/${type}/${nameImg}.png` : null
  }
  return null
}