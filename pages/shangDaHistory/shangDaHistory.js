// pages/shangDaHistory/shangDaHistory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    revImgList: ["../../img/shangdashi2.jpg", "../../img/shandashi1.jpg"],
    currentTab: 2,
  },

  changeNavTab(evt) {
    //切换tab栏的点击事件，通过修改data中的currentTab实现
    const currentIdx = evt.target.dataset.id;
    if(this.data.currentTab !== currentIdx) {
      this.setData({
        currentTab: +currentIdx
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  

  shangDaHistory_sub1() {
    wx.navigateTo({
      url: '../shangDaHistory_sub1/shangDaHistory_sub1',                                                 
    })
  },
  shangDaHistory_sub2() {
    wx.navigateTo({
      url: '../shangDaHistory_sub2/shangDaHistory_sub2',                                                 
    })
  }
  
})