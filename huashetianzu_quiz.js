const quizQuestions = [
    {
        id: 1,
        text: "下列句子中，加点字“固”的含义和用法解释最准确的是？",
        py: "xià liè jù zǐ zhōng jiā diǎn zì gù de hán yì hé yòng fǎ jiě shì zuì zhǔn quě de shì",
        en: "Which of the following explains the meaning of 'gù' in 'shé gù wú zú' accurately?",
        options: [
            {
                text: "固执、顽固、不听劝阻",
                py: "gù zhí wán gù bù tīng quàn zǔ",
                en: "Stubborn, obstinate.",
                correct: false,
                explanation: "错误。在这里“固”修饰无足，属于副词，并不是形容词顽固的意思。",
                explanationPy: "cuò wù zài zhè lǐ gù xiū shì wú zú shǔ yú fù cí bìng bú shì xíng róng cí wán gù de yì si",
                explanationEn: "Incorrect. In this sentence, 'gu' modifies 'wu zu' as an adverb, not as an adjective meaning stubborn."
            },
            {
                text: "本来、原来、天生就是",
                py: "běn lái yuán lái tiān shēng jiù shì",
                en: "Inherently, originally, by nature.",
                correct: true,
                explanation: "正确！“蛇固无足”的意思是“蛇本来就是没有脚的”，用以强调客观事实。",
                explanationPy: "zhèng què shé gù wú zú de yì si shì shé běn lái jiù shì méi yǒu jiǎo de yòng yǐ qiáng diào kè guān shì shí",
                explanationEn: "Correct! 'She gu wu zu' means 'snakes naturally have no feet', emphasizing a basic, undeniable fact."
            },
            {
                text: "坚固、牢固、不容易损坏",
                py: "jiān gù láo gù bù róng yì sǔn huài",
                en: "Firm, sturdy, solid.",
                correct: false,
                explanation: "错误。这个物理属性含义与生物结构的特征讨论完全无关。",
                explanationPy: "cuò wù zhè gè wù lǐ shǔ xìng hán yì yǔ shēng wù jié gòu de tè zhēng tǎo lùn wán quán wú guān",
                explanationEn: "Incorrect. This physical meaning of sturdiness has no logical relevance to the biological trait of a snake."
            },
            {
                text: "巩固、加强国防力量",
                py: "gǒng gù jiā qiáng guó fáng lì liàng",
                en: "To consolidate or reinforce.",
                correct: false,
                explanation: "错误。这是动词用法，在句中作状语的“固”不具有动词功能。",
                explanationPy: "cuò wù zhè shì dòng cí yòng fǎ zài jù zhōng zuò zhuàng yǔ de gù bú jù yǒu dòng cí gōng néng",
                explanationEn: "Incorrect. This is a verbal usage, which is grammatically impossible for 'gu' serving as a modifier here."
            }
        ]
    },
    {
        id: 2,
        text: "文中句子“子安能为之足”是一个反问句，其中“安”字的意思是？",
        py: "wén zhāng zhōng jù zǐ zǐ ān néng wéi zhī zú shì yī gè fǎn wèn jù qí zhōng ān zì de yì si shì",
        en: "The sentence 'zǐ ān néng wéi zhī zú' is a rhetorical question. What does 'ān' mean?",
        options: [
            {
                text: "安全、没有危险",
                py: "ān quán méi yǒu wēi xiǎn",
                en: "Safe, secure, free from danger.",
                correct: false,
                explanation: "错误。虽然现代汉语常用安全，但在文言反问句中，“安”通常用作疑问代词。",
                explanationPy: "cuò wù suī rán xiàn dài hàn yǔ cháng yòng ān quán dàn zài wén yán fǎn wèn jù zhōng ān tōng cháng yòng zuò yí wèn dài cí",
                explanationEn: "Incorrect. Though 'an' means safety in modern Chinese, it serves as an interrogative pronoun in classical rhetorical structures."
            },
            {
                text: "怎么、哪里、如何",
                py: "zěn me nǎ lǐ rú hé",
                en: "How, where, by what means.",
                correct: true,
                explanation: "正确！“子安能为之足”意为“你独立怎么能给它画上脚呢”，用疑问代词表反问。",
                explanationPy: "zhèng què zǐ ān néng wéi zhī zú yì wéi nǐ dú lì zěn me néng gěi tā huà shàng jiǎo ne yòng yí wèn dài cí biǎo fǎn wèn",
                explanationEn: "Correct! 'An' functions here as an interrogative adverb meaning 'how', creating the strong rhetorical tone."
            },
            {
                text: "安置、安放、安顿下来",
                py: "ān zhì ān fàng ān dùn xià lái",
                en: "To settle, place, or arrange.",
                correct: false,
                explanation: "错误。这里不是动词，后面已经有动词“能为”，不可以双动词重叠连用。",
                explanationPy: "cuò wù zhè lǐ bú shì dòng cí hòu miàn yǐ jīng yǒu dòng cí néng wéi bù kě yǐ shuāng dòng cí chóng dié lián yòng",
                explanationEn: "Incorrect. It is not a verb here, as the clause already contains the verbal structure 'neng wei'."
            },
            {
                text: "安心、感到舒适和满足",
                py: "ān xīn gǎn dào shū shì hé mǎn zú",
                en: "At ease, content, peaceful.",
                correct: false,
                explanation: "错误。词义完全不符合夺过杯子、严厉反驳他人的语气。",
                explanationPy: "cuò wù cí yì wán quán bù fú hé duó guò bēi zǐ yán lì fǎn bó tā rén de yǔ qì",
                explanationEn: "Incorrect. This peaceful meaning contradicts the aggressive, confrontational act of snatching the cup."
            }
        ]
    },
    {
        id: 3,
        text: "根据故事发展，第一个画完蛇的人最终没有喝到酒的原因是？",
        py: "gēn jù gù shì fā zhǎn dì yī gè huà wán shé de rén zuì zhōng méi yǒu hē dào jiǔ de yuán yīn shì",
        en: "According to the story, why did the first person who finished the snake fail to drink the wine?",
        options: [
            {
                text: "因为他画的蛇太丑，遭到了大家的嫌弃",
                py: "yīn wèi tā huà de shé tài chǒu zāo dào le dà jiā de xián qì",
                en: "Because his snake was too ugly and rejected by everyone.",
                correct: false,
                explanation: "错误。比赛规则只比速度（先成者），不比美丑，他没喝到是因为自作聪明去画脚。",
                explanationPy: "cuò wù bǐ sài guī zé zhǐ bǐ sù dù xiān chéng zhě bù bǐ měi chǒu tā méi hē dào shì yīn wèi zì zuò cōng míng qù huà jiǎo",
                explanationEn: "Incorrect. The rule only measured speed, not aesthetic quality; he lost because he foolishly paused to add feet."
            },
            {
                text: "因为他多此一举去画蛇脚，导致别人先宣布画完真正的蛇",
                py: "yīn wèi tā duō cǐ yī jǔ qù huà shé jiǎo dǎo zhì bié rén xiān xuān bù huà wán zhēn zhèng de shé",
                en: "Because he pointlessly drew feet, allowing another to finish a true snake first.",
                correct: true,
                explanation: "正确！蛇本来无足，他自作聪明去画脚，结果在“未成”时，另一个人宣布完成并夺走了酒杯。",
                explanationPy: "zhèng què shé běn lái wú zú tā zì zuò cōng míng qù huà jiǎo jié guǒ zài wèi chéng shí lìng yī gè rén xuān bù wán chéng bìng duó zǒu le jiǔ bēi",
                explanationEn: "Correct! Snakes have no feet. His redundant action allowed another competitor to finish a anatomically correct snake and seize the cup."
            },
            {
                text: "因为楚国的那个祭祀主人突然反悔不给酒了",
                py: "yīn wèi chǔ guó de nà gè jì sì zhǔ rén tū rán fǎn huǐ bù gěi jiǔ le",
                en: "Because the Chu host suddenly changed his mind and took back the wine.",
                correct: false,
                explanation: "错误。祭祀主人把酒赐给他们后就没有再出现，酒是由门客们自己分喝的。",
                explanationPy: "cuò wù jì sì zhǔ rén bǎ jiǔ cì gěi tā men hòu jiù méi yǒu zài chū xiàn jiǔ shì yóu shén rén men zì jǐ fēn hē de",
                explanationEn: "Incorrect. The host never reappears after granting the reward; the retainers distributed it amongst themselves."
            },
            {
                text: "因为那杯酒不小心被他自己泼洒在地面上了",
                py: "yīn wèi nà bēi jiǔ bù xiǎo xīn bèi tā zì jǐ pō sǎ zài dì miàn shàng le",
                en: "Because the cup of wine was accidentally spilled onto the ground by himself.",
                correct: false,
                explanation: "错误。酒杯是被另一个画完的门客抢过去喝掉的，并没有泼洒。",
                explanationPy: "cuò wù jiǔ bēi shì bèi lìng yī gè huà wán de shè rén qiǎng guò qù hē diào de bìng méi yǒu pō sǎ",
                explanationEn: "Incorrect. The cup was explicitly snatched and consumed by a rival; none of the wine was spilled."
            }
        ]
    }
];
