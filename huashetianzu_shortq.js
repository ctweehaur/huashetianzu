/**
 * 互动古文教学平台 - 简答题特训专属题库 (大马中学完全对齐版)
 */

const shortQData = [
    {
        id: "Q1",
        qZh: "祭祀的主人给门客们赏赐了一壶酒后，门客们为什么不直接分着喝，而是决定举行画蛇比赛？",
        qPy: "jì sì de zhǔ rén gěi shén rén men shǎng cì le yī hú jiǔ hòu shén rén men wèi shén me bù zhí jiē fēn zhe hē ér shì jué dìng jǔ xíng huà shé bǐ sài",
        qEn: "After the host rewarded them with a goblet of wine, why didn't the retainers share it directly instead of holding a contest?",
        sZh: [
            "1. 对应课文原话“数人饮之不足，一人饮之有余”。",
            "2. 说明人多酒少，分着喝大家都不够，一个人喝才刚好过瘾，所以才用比赛来决定谁能独享。"
        ],
        sPy: [
            "duì yìng kè wén yuán huà shù rén yǐn zhī bù zú yī rén yǐn zhī yǒu yú",
            "shuō míng rén duō jiǔ shǎo fēn zhe hē dà jiā dōu bú zù yī rén hē cái gāng hǎo guò yǐn suǒ yǐ cái yòng bǐ sài lái jué dìng shéi néng dú xiǎng"
        ],
        sEn: "Step 1: Refer to the textual sentence 'If several drink it, it is insufficient; if one drinks it, it is plenty'.<br>Step 2: Explain that because the wine was scarce, sharing would benefit no one, so a contest decided the sole winner.",
        aZh: "因为门客们认为这壶酒如果几个人一起分着喝就不够，如果给一个人单独喝就会有剩余。为了公平决定这壶酒归谁独享，他们才决定通过在地上画蛇的比赛来定胜负。",
        aPy: "yīn wèi shè rén men rèn wéi zhè hú jiǔ rú guǒ shù rén yī qǐ fēn zhe hē jiù bú zú rú guǒ gěi yī rén dān dú hē jiù huì yǒu yú wèi le gōng píng jué dìng zhè hú jiǔ guī shéi dú xiǎng tā men cái jué dìng tōng guò zài dì shàng huà shé de bǐ sài lái dìng shèng fù",
        aEn: "Because the retainers realized that the wine would be insufficient if shared among many, but plenty for a single person. To fairly decide who would enjoy it alone, they agreed on a competitive race to draw a snake."
    },
    {
        id: "Q2",
        qZh: "第一个把蛇画好的人，在准备喝酒前做了一个什么多余的举动？他当时说了什么话？",
        qPy: "dì yī gè bǎ shé huà hǎo de rén zài zhǔn bèi hē jiǔ qián zuò le yī gè shén me duō yú de jǔ dòng tā dāng shí shuō le shén me huà",
        qEn: "What unnecessary action did the first person who finished the snake take before drinking? What did he say at that moment?",
        sZh: [
            "1. 找出描写他画好之后的动作细节（左手持卮，右手画蛇脚）。",
            "2. 提取出他自大吹嘘的原话内容（吾能为之足）。"
        ],
        sPy: [
            "zhǎo chū miáo xiě tā huà hǎo zhī hòu de dòng zuò xì jié zuǒ shǒu chí zhī yòu shǒu huà shé jiǎo",
            "tí qǔ chū tā zì dà chuī xuī de yuán huà nèi róng wú néng wéi zhī zú"
        ],
        sEn: "Step 1: Identify his physical movements after completing the snake (holding the cup while adding feet).<br>Step 2: Extract his boastful words ('I can even add feet to it').",
        aZh: "He made a redundant move by holding the wine cup with his left hand, ready to drink, while continuing to draw the feet of the snake on the ground with his right hand. He boasted proudly at that time, 'I can even add feet to it!'"
    },
    {
        id: "Q3",
        qZh: "第二个人是如何理直气壮地夺走酒杯的？请用自己的话写出他反驳的理由。",
        qPy: "dì èr gè rén shì rú hé lǐ zhí qì zhuàng de duó zǒu jiǔ bēi de qǐng yòng zì jǐ de huà xiě chū tā fǎn bó de lǐ yóu",
        qEn: "How did the second man confidently snatch the wine cup away? Please write his reason in your own words.",
        sZh: [
            "1. 概括第二个人抢过酒杯后对第一个人说的话（蛇固无足）。",
            "2. 说明他反驳的生物常识理由：蛇本来就没有脚，画上脚的就根本不是蛇了，所以第一个人并没有真正完成比赛。"
        ],
        sPy: [
            "gài kuò dì èr gè rén qiǎng guò jiǔ bēi hòu duì dì yī gè rén shuō de huà shé gù wú zú",
            "shuō míng tā fǎn bó de shēng wù cháng shí lǐ yóu shé běn lái jiù méi yǒu jiǎo huà shàng jiǎo de jiù gēn běn bú shì shé le suǒ yǐ dì yī gè rén bìng méi yǒu zhēn zhèng wán chéng bǐ sài"
        ],
        sEn: "Step 1: Summarize the words spoken by the second man after grabbing the cup.<br>Step 2: Explain his factual counterargument: snakes naturally lack feet, so the first man had not actually drawn a valid snake.",
        aZh: "第二个人指出蛇本来就是没有脚的，你既然给它加上了脚，画出来的东西就根本不是蛇了。因此，第二个人认为自己才是最先画好真正的蛇的人，从而理直气壮地夺走了酒杯。",
        aPy: "dì èr gè rén zhǐ chū shé běn lái jiù shì méi yǒu jiǎo de nǐ jì rán gěi tā jiā shàng le jiǎo huà chū lái de dōng xī jiù gēn běn bú shì shé le yīn cǐ dì èr gè rén rèn wéi zì jǐ cái shì zuì xiān huà hǎo zhēn zhèng de shé de rén cóng ér lǐ zhí qì zhuàng de duó zǒu le jiǔ bēi",
        aEn: "The second man pointed out that snakes naturally have no feet, so by adding feet, the creation ceased to be a snake. Therefore, he argued that he was the true winner who finished an actual snake first, justifying his reclamation of the cup."
    },
    {
        id: "Q4",
        qZh: "分析第一个门客从“比赛第一名”到“最终喝不到酒”的原因，他犯了什么致命错误？",
        qPy: "fēn xī dì yī gè shè rén cóng bǐ sài dì yī míng dào zuì zhōng hē bú dào jiǔ de yuán yīn tā fàn le shén me zhì mìng cuò wù",
        qEn: "Analyze why the first retainer fell from first place to losing the wine. What fatal mistake did he make?",
        sZh: [
            "1. 说明他缺乏“适可而止”的智慧，赢了比赛后开始骄傲、炫耀（炫耀居功）。",
            "2. 指出他脱离实际、多此一举，做了不符合客观事实的荒唐加法。"
        ],
        sPy: [
            "shuō míng tā quē fá shì kě ér zhǐ de zhì huì yíng le bǐ sài hòu kāi shǐ jiāo ào xuàn yào xuàn yào jū gōng",
            "zhǐ chū tā tuō lí shí jì duō cǐ yī jǔ zuò le bù fú hé kè guān shì shí de huāng táng jiā fǎ"
        ],
        sEn: "Step 1: Explain his lack of discretion and immediate descent into arrogance and showing off after winning.<br>Step 2: Point out his redundant and counterfactual addition that corrupted his own success.",
        aZh: "他犯的致命错误是自作聪明、炫耀居功。他本来已经赢得了比赛，却缺乏适可而止的智慧，脱离实际地去做多余的事情（画蛇脚），最终白白把快到手的胜利果实拱手让人。",
        aPy: "tā fàn de zhì mìng cuò wù : zì zuò cōng míng xuàn yào jū gōng tā běn lái yǐ jīng yíng dé le bǐ sài què quē fá shì kě ér zhǐ de zhì huì tuō lí shí jì de qù zuò duō yú de shì qíng huà shé jiǎo zuì zhōng bái bái bǎ kuài dào shǒu de shèng lì guǒ shí gǒng shǒu ràng rén",
        aEn: "His fatal mistake was being overly clever and arrogant. Having already won, he lacked the wisdom to stop, choosing instead to engage in a redundant, counterfactual action that threw away his definitive victory."
    },
    {
        id: "Q5",
        qZh: "大马中学生在平时的考试、写作或做人做事中，可以从这篇故事吸取什么教训？",
        qPy: "dà mǎ zhōng xué shēng zài píng shí de kǎo shì xiě zuò huò zuò rén zuò shì zhōng kě yǐ cóng zhè piān gù shì xī qǔ shén me jiào xùn",
        qEn: "What lesson can Malaysian secondary school students learn from this story for their exams, writing, or daily conduct?",
        sZh: [
            "1. 联系大马中学实际情况提出教训：做任何事情都要懂得适可而止，做到符合标准即可，不要画蛇添足。",
            "2. 举出具体考试例子：例如写华文作文或做阅读理解时，回答切中得分点即可，不要写一堆无关的多余废话，否则可能多说多错、扣除分数。"
        ],
        sPy: [
            "lián xì dà mǎ zhōng xué shí jì qíng kuàng tí chū jiào xùn zuò rèn hé shì qíng dōu yào dǒng dé shì kě ér zhǐ zuò dào fú hé biāo zhǔn jí kě bú yào huà shé tiān zú",
            "jǔ chū jù tǐ kǎo shì lì zǐ lì rú xiě huá wén zuò wén huò zuò yuè dú lǐ jiě shí huí dá qiè zhòng dé fēn diǎn jí kě bú yào xiě yī duī wú guān de duō yú fèi huà fǒu zé kě néng duō shuō duō cuò kòu chú fēn shù"
        ],
        sEn: "Step 1: Connect to daily student conduct: everything should be done to meet the required standard without excessive overdoing.<br>Step 2: Give an exam example: in Chinese writing or reading comprehension, answer precisely to the point without adding irrelevant text that might incur penalties.",
        aZh: "教训我们做任何事都要踏实、懂得适可而止。例如我们在面对华文考试的简答题或作文时，只要清晰、准确地回答完得分点即可，千万不要为了充字数而写一堆无关的废话（画蛇添足），否则往往多说多错，反而被扣除分数。",
        aPy: "jiào xùn wǒ men zuò rèn hé shì dōu yào tà shí dǒng dé shì kě ér zhǐ lì rú wǒ men zài miàn duì huá wén kǎo shì de jiǎn dá tí huò zuò wén shí zhǐ yào qīng xī zhǔn quě de huí dá wán dé fēn diǎn jí kě qiān wàn bú yào wèi le chōng zì shù ér xiě yī duī wú guān de fèi huà huà shé tiān zú fǒu zé wǎng wǎng duō shuō duō cuò fǎn ér bèi kòu chú fēn shù",
        aEn: "The lesson is to remain grounded and know when to stop. For instance, in Chinese exams or essay responses, we must answer precisely to the grading criteria; padding the text with redundant information will only lead to mistakes and unnecessary penalties."
    }
];
