import { useMemo, useCallback } from "react";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  const companyList = useMemo(() => {
    return feedbackItems
      .map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  }, [feedbackItems]);

  const memoizedSelectCompany = useCallback(
    (company: string) => selectCompany(company),
    [selectCompany],
  );

  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={memoizedSelectCompany}
        />
      ))}
    </ul>
  );
}
