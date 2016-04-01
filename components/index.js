// 复用组件
import linkage from '../components/src/Linkage.vue';
import wordcount from '../components/src/WordCount.vue';
import jellybean from '../components/src/Jellybean.vue';
import select2 from '../components/src/Select2.vue';

// dashborad
import homehistory from '../components/src/homeHistory.vue';

const VueComponent = {
	linkage : linkage,
	wordcount : wordcount,
	jellybean : jellybean,
	select2 : select2,
	homehistory : homehistory
}

window.VueComponent = VueComponent;

