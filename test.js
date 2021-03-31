import xlxs from 'xlsx'

let link = [
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3669467499743038/?refid=18&_ft_=qid.6945488961924525358%3Amf_story_key.3669467499743038%3Atop_level_post_id.3669467499743038%3Atl_objid.3669467499743038%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.share%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX84erIyTFt28Wmz&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3660573943965727/?refid=18&_ft_=qid.6945488961730802459%3Amf_story_key.3660573943965727%3Atop_level_post_id.3660573943965727%3Atl_objid.3660573943965727%3Acontent_owner_id_new.100026699686347%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_BDYihrK8ksz6-&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3569190776437378/?refid=18&_ft_=qid.6945488961778332943%3Amf_story_key.3569190776437378%3Atop_level_post_id.3569190776437378%3Atl_objid.3569190776437378%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.file_upload%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_h2g2ghLcn8IA0&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2692359080787223/?refid=18&_ft_=qid.6945489159469576655%3Amf_story_key.2692359080787223%3Atop_level_riesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-o4KgSONermlMT&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2692359080787223/?refid=18&_ft_=qid.6945489159469576655%3Amf_story_key.2692359080787223%3Atop_level_riesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2692359080787223/?refid=18&_ft_=qid.6945489159469576655%3Amf_story_key.2692359080787223%3Atop_level_post_id.2692359080787223%3Atl_objid.2692359080787223%3Acontent_owner_id_new.24804229%3Apage_id.670714432951708%3Atext_formatting.443152422856521%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX8pdx1rwDwt5SsX&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2689726991050432/?refid=18&_ft_=qid.6945489159440278083%3Amf_story_key.2689726991050432%3Atop_level_post_id.2689726991050432%3Atl_objid.2689726991050432%3Acontent_owner_id_new.1681752262%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachmenpost_id.2692359080787223%3Atl_objid.2692359080787223%3Acontent_owner_id_new.24804229%3Apage_id.670714432951708%3Atext_formatting.443152422856521%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX8pdx1rwDwt5SsX&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2689726991050432/?refid=18&_ft_=qid.6945489159440278083%3Amf_story_key.2689726991050432%3Atop_level_post_id.2689726991050432%3Atl_objid.2689726991050432%3Acontent_owner_id_new.1681752262%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.photo%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_cd4DdKcaMD9r7&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677786308911167/?refid=18&_ft_=qid.6945489176638477183%3Amf_story_key.2677786308911167%3Atop_level_post_id.2677786308911167%3Atl_objid.2677786308911167%3Acontent_owner_id_new.1681752262%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.photo%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-eF9rZzvpYOA4h&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677448155611649/?refid=18&_ft_=qid.6945489176433184981%3Amf_story_key.2677448155611649%3Atop_level_post_id.2677448155611649%3Atl_objid.2677448155611649%3Acontent_owner_id_new.1153716482%3Acall_to_action_type.EVENT_RSVP%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.event%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-tqFLOtKcKzBSv&__tn__=%2AW-R#footer_action_list',
]

let post = [
  {
    post:
      'Can someone tell me if there is a correlation between WD and ADD? Or if ADD could be a side affect of Syprine??',
    poster: "Terri Fontenot asked a question in Wilson's Disease.",
    date: 'January 5 at 4:39 AM',
  },
  {
    post:
      "Many people with Wilson's Disease can't smell skunks. However, I can't smell (for lack of a better word) flatulence, either. Is anyone else the same way?",
    poster: "Jackie Smith > ‎Wilson's Disease",
    date: 'December 26, 2020 at 2:57 PM',
  },
  {
    post:
      "Can anyone in the group shed some light on the role of copper in Alzheimer's disease? I now have the 3rd person in my family, at age 55, who now has advanced Alzheimer's.",
    poster: "Eric Ronald Messersmith > ‎Wilson's Disease",
    date: 'December 19, 2020 at 6:33 PM',
  },
]

const comments = [
  'this is a comment one',
  'this is a comment two',
  'this is a comment  three',
  'this is a comment four',
  'this is a comment five',
]
const commenters = [
  'john doe 1',
  'john doe 2',
  'john doe 3',
  'john doe 4',
  'john doe 5',
]

function presentComments(fileName) {
  const res = commenters.map((commenter, i) => ({
    commenter,
    comment: comments[i],
  }))
}

function presentPosts(scrappedPosts, name) {
  try {
    const wb = xlxs.utils.book_new()
    const ws = xlxs.utils.json_to_sheet(scrappedPosts)
    xlxs.utils.book_append_sheet(wb, ws)
    xlxs.writeFile(wb, name)
  } catch (error) {
    console.log('customized error!!', error)
  }
}

function convert(urls) {
  let container = []
  for (const url of urls) {
    let alink = url.split('')
    if (alink[8] === 'm') {
      alink[8] = 'free'
      container.push(alink.join(''))
    } else {
      urls.slice(8, 1)
    }
  }
  return container
}

let testArr = [
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2236905222999280/?refid=18&_ft_=qid.6945785516347490998%3Amf_story_key.2236905222999280%3Atop_level_post_id.2236905222999280%3Atl_objid.2236905222999280%3Acontent_owner_id_new.100000321437220%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_xeXlxiWfrYnlW&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3586835631339559/?refid=18&_ft_=qid.6945785516338171102%3Amf_story_key.3586835631339559%3Atop_level_post_id.3586835631339559%3Atl_objid.3586835631339559%3Acontent_owner_id_new.100000321437220%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX8BgTYVDhfgZ9c2&__tn__=%2AW-R#footer_action_list',
  'https://free.facebook.com/save/story/basic/?story_id=S%3A_I1324398913%3AVK%3A3617880588235063&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3MTkxNzEyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1617450913&hash=AeTrZU9b1Q8RtsqSe7A&refid=18&_ft_=qid.6945785516477660744%3Amf_story_key.3617880588235063%3Atop_level_post_id.3617880588235063%3Atl_objid.3617880588235063%3Acontent_owner_id_new.1324398913%3Aoriginal_content_id.3514725405231170%3Aoriginal_content_owner_id.163164747053936%3Apage_id.163164747053936%3Asrc.22%3Astory_location.6%3Aattached_story_attachment_style.photo%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX8jq_kZ-Tmgwu4a&__tn__=%2AW-R',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3576637122359410/?refid=18&_ft_=qid.6945785516364355899%3Amf_story_key.3576637122359410%3Atop_level_post_id.3576637122359410%3Atl_objid.3576637122359410%3Acontent_owner_id_new.100000321437220%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_ThlHV3IzJJUkC&__tn__=%2AW-R#footer_action_list',
  'https://free.facebook.com/save/story/basic/?story_id=S%3A_I100015003795183%3AVK%3A3578440532179069&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3MTkxNzEyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1617450913&hash=AeRK2WaBDScNditQPTQ&refid=18&_ft_=qid.6945785516368803730%3Amf_story_key.3578440532179069%3Atop_level_post_id.3578440532179069%3Atl_objid.3578440532179069%3Acontent_owner_id_new.100015003795183%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.share%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9z81SKDZunUpQ4&__tn__=%2AW-R',
  'https://free.facebook.com/save/story/basic/?story_id=S%3A_I1324398913%3AVK%3A3564088213614301&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3MTkxNzEyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1617450913&hash=AeQugiq5bvgc3Wt5saY&refid=18&_ft_=qid.6945785516417764733%3Amf_story_key.3564088213614301%3Atop_level_post_id.3564088213614301%3Atl_objid.3564088213614301%3Acontent_owner_id_new.1324398913%3Aoriginal_content_id.3462131467157231%3Aoriginal_content_owner_id.163164747053936%3Apage_id.163164747053936%3Asrc.22%3Astory_location.6%3Aattached_story_attachment_style.photo%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9_sYPxVm_HgNGX&__tn__=%2AW-R',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3544142018942254/?refid=18&_ft_=qid.6945785537788384126%3Amf_story_key.3544142018942254%3Atop_level_post_id.3544142018942254%3Atl_objid.3544142018942254%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.file_upload%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_Be-OJd-VJqyUd&__tn__=%2AW-R#footer_action_list',
]

const returned = convert(testArr)
console.log(returned)
