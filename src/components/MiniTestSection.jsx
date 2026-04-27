import { useMemo, useState } from "react";

const miniTestQuestions = [
  {
    id: "struggle",
    question: "en çok hangi konuda zorlanıyorsun?",
    options: [
      "ne yiyeceğime karar vermekte",
      "akşam saatlerinde kontrolü korumakta",
      "düzen kurup sürdürmekte",
      "nereden başlayacağımı bilmemekte",
    ],
  },
  {
    id: "timing",
    question: "gün içinde en çok ne zaman kontrolü kaybediyorsun?",
    options: [
      "sabah aceleyle başlarken",
      "öğle arası düzensiz kaldığında",
      "akşam eve gelince",
      "gece atıştırmaları başladığında",
    ],
  },
  {
    id: "firstStep",
    question: "şu an senden en gerçekçi beklenebilecek ilk adım ne?",
    options: [
      "öğün düzenimi sadeleştirmek",
      "tatlı veya atıştırma döngüsünü fark etmek",
      "alışveriş ve mutfak düzenini toparlamak",
      "kısa bir planla nereden başlayacağımı netleştirmek",
    ],
  },
  {
    id: "barrier",
    question: "seni en çok zorlayan şey hangisi?",
    options: [
      "bilgi eksikliği",
      "düzen kurmak",
      "süreklilik sağlamak",
      "motivasyonun hızla düşmesi",
    ],
  },
];

export default function MiniTestSection() {
  const [answers, setAnswers] = useState({});

  const answeredCount = Object.keys(answers).length;
  const isResultEnabled = answeredCount >= 2;

  const resultCopy = useMemo(() => {
    if (!isResultEnabled) {
      return "en az iki soruyu seçince sana uygun başlangıç yönünü burada göstereceğiz.";
    }

    if (
      answers.barrier === "düzen kurmak" ||
      answers.firstStep === "alışveriş ve mutfak düzenini toparlamak"
    ) {
      return "ilk odağın düzen kurmak olabilir. küçük bir yemek planı ve mutfak akışı kurmak sana daha iyi gelebilir.";
    }

    if (
      answers.timing === "akşam eve gelince" ||
      answers.timing === "gece atıştırmaları başladığında"
    ) {
      return "akşam saatleri senin için kritik görünüyor. günün ikinci yarısı için daha koruyucu bir plan iyi bir başlangıç olabilir.";
    }

    if (
      answers.struggle === "nereden başlayacağımı bilmemekte" ||
      answers.barrier === "bilgi eksikliği"
    ) {
      return "önce sade bir yol haritası iyi gelebilir. temel rehberler ve kısa bir yönlendirme ile başlangıcı netleştirebilirsin.";
    }

    return "sana uygun başlangıç, küçük ve sürdürülebilir adımlar seçmek gibi görünüyor. önce bir noktayı netleştirip oradan ilerlemek daha gerçekçi olabilir.";
  }, [answers, isResultEnabled]);

  const handleAnswerSelect = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  return (
    <section
      id="mini-test"
      className="rounded-[2rem] border border-green-200/80 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-green-800">
          mini test
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          sana uygun başlangıcı birlikte netleştirelim
        </h2>
        <p className="mt-3 text-sm leading-7 text-neutral-600 md:text-base">
          kısa sorularla ilk odağını belirle. tek bir doğru cevap yok, sana en
          gerçekçi gelen seçeneği işaretle.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        {miniTestQuestions.map((item, index) => (
          <div
            key={item.id}
            className="rounded-[1.5rem] border border-black/5 bg-[#fbf8f2] p-5"
          >
            <p className="text-sm font-medium text-green-800">
              soru {index + 1}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-neutral-900">
              {item.question}
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {item.options.map((option) => {
                const isSelected = answers[item.id] === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleAnswerSelect(item.id, option)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                      isSelected
                        ? "border-green-800 bg-green-50 text-green-900 shadow-sm"
                        : "border-black/10 bg-white text-neutral-700 hover:border-green-300 hover:bg-green-50/60"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-green-100 bg-green-50 p-5 md:p-6">
        <p className="text-sm font-medium text-green-800">
          seçimlerine göre ilk yön
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-neutral-700 md:text-base">
          {resultCopy}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            {answeredCount} / {miniTestQuestions.length} soru seçildi
          </p>
          {isResultEnabled ? (
            <a
              href="#mini-form"
              className="inline-flex items-center justify-center rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900"
            >
              bana uygun başlangıcı göster
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-green-800/40 px-5 py-3 text-sm font-medium text-white transition"
            >
              bana uygun başlangıcı göster
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
