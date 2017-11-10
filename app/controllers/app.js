'use strict'

// 用于封装controllers的公共方法
exports.test = async (ctx, next) => {

  ctx.body = {
    success: ctx.request,
  }
}