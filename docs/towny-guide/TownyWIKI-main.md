---
id: basics
title: Towny 详细玩法
slug: /towny-guide/basics
sidebar_label: 详细玩法
---

# TechBedrock Towny 详细玩法

## 0. TL;DR \(急性子看这三行\)

- **创建城镇：** 站在想当家门口的地块`/t new &lt;NAME&gt;`&`/t create &lt;NAME&gt;` →  点击提示或`/confirm` → 设置城镇的主地块 **(Homeblock)** `/t set homeblock` →  再往你的城镇氪点金毕`/t deposit &lt;MONEY&gt;` .

    > 按 F3+G 看区块边界每一个区块就是你城镇的一个地块, 再使用 `/towny map hud` 打开mini格子地图食用更佳

- **加入城镇：** `/t list` 找城 → `/t &lt;城镇名&gt;` 看简介查税率 *\(会是圈钱城吗\)*  →  `/t join &lt;城镇名&gt;` 申请之后城主同意就进城辣 \(→ 没公开就在聊天栏球球城镇居民让ta们拉你 → 收到邀请就**点击聊天框**或输入`/accept`加入叭\)

- **我是镇长! 如何管理好我的一方小天地：** 在地块里用 `/plot set &lt;shop|farm|jail|...&gt;` , 用 `/t set perm & /res set perm` 管理权限, 用 `/plot toggle &lt;pvp|fire|explosion|mobs|taxed&gt; &lt;on|off&gt;` 控制环境.

    > 地块的含义以及指令的具体用法在下方有详细说明.

## 1. Towny是啥? 能吃吗?

### 不能吃, 但是很好van♂

你可以与居民们一起冒险探索, 享受着与民同乐的乐趣, 与居民一起建设城镇；也可以眼看着别人辛辛苦苦挖矿, 等待着数不尽金钱从天上飞入你的口袋中……或者就是单纯成为城镇的一份子, 享受着城镇给你带来的便利或者是~~最不希望的土皇帝的剥削~~ —— 一切取决于你的选择, 这就是 Towny

> [!note]
>
> ### Towny有三个层级
>
> - **Resident 居民**：没城的叫 Nomad 游民；有城的就是居民。
> - **Town 城镇**：有一位 Mayor 镇长， 可以设立地块类型与税制。
> - **Nation 国家**：由若干城镇组成，有 Nation Leader，可设联盟、国家税、国家传送点。

## 2.镇长详细入门 \(如果你想当一个~~带善人~~就仔细看完\)

一日, 一位名为g2213swo的"仙入"赐予了你一本书, 并对你说：
> "e"  
> "这是荒, 哦不, 皇地内经!"  
> "什么D玩意?"  
> "害↘, 就是修炼了这个之后呢, 你建的城就都能成为**皇地**~~荒地~~啦~ 之后嘎嘎⭕米, 信我"  
于是, 你望着这个可疑的"仙入"就地开始了修炼......

### STEP1 宝典第一章 —— 起家修炼, 先立城镇🏯

#### 给你的城镇取一个响亮的名字

使用 `/t create &lt;城镇名&gt;` 或 `/t new &lt;城镇名&gt;` 创建一个新的城镇, &lt;城镇名&gt; 可自行决定, 但请不要在名字中包含任何特殊字符, 避免出现错误. ~~(把这个用 Fxxk2213 当名字的人踢了)~~.

您还可以使用 `/t claim` 认领一块新的地皮将这块地皮纳入您的城镇（地皮需要挨着主地块）

#### 招募居民

使用 `/t invite &lt;玩家名&gt;` 找一些志同道合的伙伴 ~~（或者是疯狂给你交税的富哥）~~

### STEP2 宝典第二章 —— 固若金汤, 熊娃止步门外徨

#### 设置城镇权限

使用 `/t set perm` 开始微操, 您可以设置 居民(resident)/盟友(ally)/外人(outsider)/朋友(friend) 在城镇地块上的 建造(build)/破坏(destroy)/使用开关(switch) 等权限

举个栗子:
 你不想让外人在你的城镇上做任何事您可以：
 `/t set perm outsider off *关闭外人的所有权限*`

再举个栗子:
 你不想让你的朋友在你的城镇上使用物品（比如烈焰蛋 打火石）~~毕竟你永远不知道你的朋友会干出什么破事~~, 那您可以
  `/t set perm friend itemuse off *关闭朋友的使用物品权限*`

总之：`/t set perm &lt;人|权限&gt; &lt;权限|(on/off)&gt; &lt;on/off&gt;`

很好, 我相信聪明的你已经懂了权限系统了, 那接下来就~~来帮腐竹管 LP 吧(bushi~~.  

##### 不不, 下一步我们来管理土地叭

基本指令  `/t toggle &lt;Settings&gt; &lt;on/off&gt;` , 您可以开关城镇火焰蔓延、开关城镇内的敌对怪物生成等操作. 

照旧举个栗子:
  你的城镇是用来~~搞🟡的~~干坏事的, 你不想让别人知道, 你就可以使用
  `/t toggle open off *关闭城镇的访问查看权限*`

其他的权限可自行查阅下面的表格, 就不详细说明辣 ~~(绝对不是南瓜懒~~

|     父指令     |    子指令     |  开启/关闭   | 注解           |
| :---------: | :--------: | :------: | ------------ |
| `/t toggle` |  explsion  | &lt;on/off&gt; | 关城镇内的爆炸.     |
| `/t toggle` |    fire    | &lt;on/off&gt; | 开关城镇内的火势蔓延.  |
| `/t toggle` |    mobs    | &lt;on/off&gt; | 关城镇内的敌对怪物生成. |
| `/t toggle` |   public   | &lt;on/off&gt; | 外人是否开启城镇传送点. |
| `/t toggle` |    pvp     | &lt;on/off&gt; | 开关城镇内的PVP.   |
| `/t toggle` | taxpercent | &lt;on/off&gt; | 开关按税率收税.     |
| `/t toggle` |    open    | &lt;on/off&gt; | 放/关闭公开城镇.    |

##### 下一步, 我们来了解城镇的地块

使用 `/towny map` 在聊天栏查看ASCII 小地图. 
或者使用 `/towny map hud` 把地图挂到计分板HUD, 边走边刷新, 推荐食用👍

![Towny Map](/img/towny-guide/-TownyMap.png)
TODO...

##### 🛑镇长每日自查清单

1. 🤔银行有钱吗？（/town查看)
2. 🤔税率合理吗？居民会不会明天就暴动？
3. 🤔地盘安全吗？PVP关了吗？
4. 🤔有新地盘可以圈吗？
5. 🍵放松一下，你是个好镇长。
